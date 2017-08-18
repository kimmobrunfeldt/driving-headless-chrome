const { expect } = require('chai');
const { Chromeless } = require('chromeless');

describe('Chromeless', () => {
    it('simple example', async () => {
        const chromeless = new Chromeless({ launchChrome: false });
        const result = await chromeless
            .goto('https://futurice.com')
            .wait('body')
            .evaluate(() => document.title);

        expect(result).to.equal('Futurice');

        return await chromeless.end();
    });
});