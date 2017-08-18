const { expect } = require('chai');
const { Chromeless } = require('chromeless');

const KEY_CODE_ENTER = 13;

function getPosterHeaderText(headerId) {
    // This will be executed inside Chrome, it does not see this scope,
    // so we need to pass all input as strings
    const svg = document.querySelector('.AlvarMapOverlay svg');
    const header = svg.getElementById(headerId);
    return JSON.stringify(header.textContent.trim());
}

describe('Chromeless', () => {
    it('alvarcarto', async () => {
        const chromeless = new Chromeless({
          launchChrome: false,
          viewport: {
            width: 1400,
            height: 800,
          },
        });
        const result = await chromeless
            .goto('https://design.alvarcarto.com')
            .wait('input')
            .wait(2000)  // for demo to see what happens
            .click('.PosterStyleSelectItem:nth-child(3)')
            .wait(2000)
            .click('.MapStyleSelectItem:nth-child(2)')
            .wait(2000)
            .type('Helsinki', 'input')
            .wait(1000)  // not quite solid..
            .press(KEY_CODE_ENTER)
            .wait(1000)
            .evaluate(getPosterHeaderText, 'header');

        expect(JSON.parse(result)).to.equal('HELSINKI');

        return await chromeless.end();
    });
});