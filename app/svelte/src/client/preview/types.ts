import type {
  Args as DefaultArgs,
  BaseMeta,
  BaseStory,
  Parameters as DefaultParameters,
  StoryContext as DefaultStoryContext,
} from '@storybook/addons';
import type { SvelteComponentTyped, SvelteComponent } from 'svelte';

export type { RenderContext } from '@storybook/core';
export interface ShowErrorArgs {
  title: string;
  description: string;
}

export interface MountViewArgs {
  Component: any;
  target: any;
  props: MountProps;
  on: any;
  Wrapper: any;
  WrapperData: any;
}

interface MountProps {
  rounded: boolean;
  text: string;
}

type SvelteReturnType = any;

/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
export type Meta<Args = DefaultArgs> = BaseMeta<SvelteComponent>;

/**
 * Story function that represents a component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type Story<Args = DefaultArgs> = BaseStory<Args, SvelteReturnType>;

export type Parameters = DefaultParameters & {
  /** Uses legacy Svelte rendering engine that use dynamic component */
  component: unknown;
};

export type StoryContext = DefaultStoryContext & { parameters: Parameters };
