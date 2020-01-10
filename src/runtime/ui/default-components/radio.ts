/*
	RADIO - To be inserted into the `Choice` component
*/

import { ChoiceComponentProps } from '../ui-specs';
import { UserInterface } from '../ui-object-specs';
import { ComponentSELF, createComponent } from 'driza/internal';
import { dependantStore } from 'driza/store';

export interface RadioOptions {}
export type RadioData = string;

function constructor(props: ChoiceComponentProps, UI: UserInterface, SELF: ComponentSELF) {
	const indicator = UI.Label({ text: dependantStore(() => (props.selected.get() ? '• ' : ''), props.data) });
	const label = UI.Label({ text: props.data });

	const wrapper = UI.Element();

	// TODO: Wrap things

	SELF.render(indicator, label);
}

export const Radio = createComponent(constructor);