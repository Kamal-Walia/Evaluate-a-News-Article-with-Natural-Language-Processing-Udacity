import {validURL} from '../client/js/urlChecker'


describe('Test "validURL()" should exist' , () => {
    test('It should return true', async () => {
        expect(validURL).toBeDefined();
    });
});
describe('Test "validURL()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validURL).toBe("function");
    });
});

describe('Test "validURL()" for valid url' , () => {
    var url = "https://www.studentnewsdaily.com/daily-news-article/u-s-seizes-north-korean-cargo-ship/";
    test('It should return true', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});
describe('Test "validURL()" for invalid url' , () => {
    var url = "htps://www.studentnewsdaily.com/daily-news-article/u-s-seizes-north-korean-cargo-ship/";
    test('It should return false', async () => {
        const response = validURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});





