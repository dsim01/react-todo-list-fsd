import { Todo } from '../types.ts';

export const initialTodos: Todo[] = [
  {
    id: 'some-cool-uuid',
    text: "Schedule a doctor's appointment",
    completed: true,
  },
  {
    id: 'some-cool-uuid-1',
    text: 'Work on a personal project',
    completed: false,
  },
  {
    id: 'some-cool-uuid-2',
    text: 'Read a book',
    completed: false,
  },
  {
    id: 'some-cool-uuid-3',
    text: 'Exercise for 30 minutes',
    completed: false,
  },
];
