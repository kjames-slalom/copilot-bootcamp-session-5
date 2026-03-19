import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';

// Create a test query client
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

// Mock fetch for tests
global.fetch = jest.fn();

beforeEach(() => {
  // Default mock returns empty array
  global.fetch.mockResolvedValue({
    ok: true,
    json: () => Promise.resolve([]),
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders TODO App heading', async () => {
  const testQueryClient = createTestQueryClient();

  render(
    <QueryClientProvider client={testQueryClient}>
      <App />
    </QueryClientProvider>
  );

  const headingElement = await screen.findByText(/TODO App/i);
  expect(headingElement).toBeInTheDocument();
});

test('displays empty state message when no todos exist', async () => {
  const testQueryClient = createTestQueryClient();

  render(
    <QueryClientProvider client={testQueryClient}>
      <App />
    </QueryClientProvider>
  );

  const emptyMessage = await screen.findByText(/No todos yet/i);
  expect(emptyMessage).toBeInTheDocument();
});

test('calculates and displays correct stats', async () => {
  const testQueryClient = createTestQueryClient();
  
  const mockTodos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
  ];

  global.fetch.mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(mockTodos),
  });

  render(
    <QueryClientProvider client={testQueryClient}>
      <App />
    </QueryClientProvider>
  );

  // Wait for stats to appear
  const itemsLeft = await screen.findByText('2 items left');
  expect(itemsLeft).toBeInTheDocument();
  
  const completed = screen.getByText('1 completed');
  expect(completed).toBeInTheDocument();
});

test('deletes a todo when delete button is clicked', async () => {
  const user = userEvent.setup();
  const testQueryClient = createTestQueryClient();
  
  const mockTodos = [
    { id: 1, title: 'Test Todo', completed: false },
  ];

  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve(mockTodos),
  }).mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve(mockTodos[0]),
  }).mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve([]),
  });

  render(
    <QueryClientProvider client={testQueryClient}>
      <App />
    </QueryClientProvider>
  );

  // Wait for todo to appear
  await screen.findByText('Test Todo');

  // Click delete button using aria-label
  const deleteButton = screen.getByRole('button', { name: 'delete todo' });
  await user.click(deleteButton);

  // Verify delete API was called
  await waitFor(() => {
    const calls = global.fetch.mock.calls;
    const deleteCall = calls.find(call => 
      call[0].includes('/1') && call[1]?.method === 'DELETE'
    );
    expect(deleteCall).toBeDefined();
  });
});

test('displays error message when API fails', async () => {
  const testQueryClient = createTestQueryClient();

  global.fetch.mockRejectedValue(new Error('API Error'));

  render(
    <QueryClientProvider client={testQueryClient}>
      <App />
    </QueryClientProvider>
  );

  const errorMessage = await screen.findByText(/error loading todos/i);
  expect(errorMessage).toBeInTheDocument();
});
