import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CarsFakeDb } from './cars';

export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Cars
            'getCars' : CarsFakeDb.data
        };
    }
}
