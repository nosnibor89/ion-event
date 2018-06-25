const item = {
    title: 'Distributed bandwidth-monitored loverage',
    note: `  Ioncity developed an app theme is as a tasks, events and notifications manager. Users can keep track of events on a beautifully
    designed in-app monthly calendar, add and manage events from the
  
    Ioncity developed an app theme is as a tasks, events and notifications manager. Users can keep track of events on a beautifully
    designed in-app monthly calendar, add and manage events from the
    Ioncity developed an app theme is as a tasks, events and notifications manager. Users can keep track of events on a beautifully
    designed in-app monthly calendar, add and manage events from the
  
    Ioncity developed an app theme is as a tasks, events and notifications manager. Users can keep track of events on a beautifully
    designed in-app monthly calendar, add and manage events from the`,
}

export const Mocker = {
    mockTodos: () => {
        const qty = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        const items = [];

        for (let i = 0; i < qty; i++) {
            const current = {
                ...item,
                done: i % 2 === 0 ? true : false,
            }
            items.push(current)
        }

        return items;

    },
    mockNotes: () => {
        const qty = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        const items = [];

        for (let i = 0; i < qty; i++) {
            const current = {
                ...item,
            }
            items.push(current)
        }

        return items;

    }
}
