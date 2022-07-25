import * as React from 'react';
import { PiletApi } from '@todo-sample/app';
import TodoItem from './TodoItem';

export function setup(app: PiletApi) {
  app.registerExtension('item', ({ params }) => <TodoItem {...params} />);
}
