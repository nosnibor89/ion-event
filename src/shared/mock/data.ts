import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as faker from 'faker';

export const Mocker = {
    mockTodos: (): Observable<any> => {
        const qty = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
        const items = [];

        for (let i = 0; i < qty; i++) {
            const current = {
                title: faker.lorem.slug(),
                note: faker.lorem.sentence(),
                id: i,
                done: faker.random.boolean(),
                createdAt: faker.date.past(),
            }
            items.push(current)
        }

        return Observable.of(items);
    },
    mockNotes: (): Observable<any> => {
        const qty = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        const items = [];

        for (let i = 0; i < qty; i++) {
            const current = {
                title: faker.lorem.slug(),
                note: faker.lorem.sentence(),
                id: i,
                createdAt: faker.date.past(),
            }
            items.push(current)
        }

        return Observable.of(items);

    }
}
