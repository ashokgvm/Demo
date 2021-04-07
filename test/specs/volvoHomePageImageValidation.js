var title;
describe('Valvo landing page title validation', () => {
it('Navigate to URL', () => {
browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
});
it('Get title', () => {
title = browser.getTitle();
});
it('Title validation', () => {
expect(title).toBe('volvo');
});
    it('Image validation', () => {
        const image = $('#wp-custom-header>img');
        expect(image.isExisting()).toBe(true);
    });
})
