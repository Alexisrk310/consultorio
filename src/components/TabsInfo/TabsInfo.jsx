import React from 'react';
import { Tabs } from 'flowbite-react';

function TabInfo({ tabs }) {
	return (
		<Tabs aria-label="Tabs with icons" style="underline">
			{tabs.map((tab, index) => (
				<Tabs.Item
					key={index}
					active={tab.active}
					title={tab.title}
					icon={tab.icon}
					disabled={tab.disabled}>
					{tab.content}
				</Tabs.Item>
			))}
		</Tabs>
	);
}

export default TabInfo;
