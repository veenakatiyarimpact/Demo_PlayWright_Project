import { test as base } from '@playwright/test';

export const test = base.extend({

    username: async ({}, use) => {
        await use('admin');
    }

});

export { expect } from '@playwright/test';