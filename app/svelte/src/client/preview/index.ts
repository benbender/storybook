import { start } from '@storybook/core';
import { Story } from './types';
import './globals';
import { decorateStory } from './decorators';
import render from './render';

const framework = 'svelte';

const globalRender: Story = (props) => ({ props });

const api = start(render, { decorateStory });

api.clientApi.globalRender = globalRender;

const { configure: coreConfigure, clientApi, forceReRender } = api;

export const {
  setAddon,
  addDecorator,
  addParameters,
  clearDecorators,
  getStorybook,
  raw,
} = clientApi;

export const storiesOf = (kind: string, m: any) =>
  clientApi.storiesOf(kind, m).addParameters({ framework });

export const configure = (loadable: any, m: any) => coreConfigure(framework, loadable, m);

export { forceReRender };

export * from './types';
