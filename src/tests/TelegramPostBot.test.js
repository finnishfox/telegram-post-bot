import nock from 'nock';
import "isomorphic-fetch";
import TelegramPostBot from '../index';
import * as config from '../../config';

test('ok', async () => {
  const okResponse = {
    "ok": true,
    "result": {
      "message_id": 93,
      "chat": {"id": config.CHAT_ID, "title": "f_test_channel", "username": "f_test_channel", "type": "channel"},
      "date": 1517507839,
      "text": "text"
    }
  };
  nock('https://api.telegram.org')
    .get(`/bot${config.BOT_API_KEY}/sendMessage?chat_id=@f_test_channel&text=text&parse_mode=HTML&disable_web_page_preview=false`)
    .reply(200,
      okResponse
    );
  const bot = new TelegramPostBot(config.BOT_API_KEY);
  const response = await bot.sendMessage('@f_test_channel', 'text', 'HTML', 'false');
  expect(response).toEqual(okResponse.result);
});


test('bad request if channel name doesnt start with @', async () => {
  const badResponse = {"ok": false, "error_code": 400, "description": "Bad Request: chat not found"};
  nock('https://api.telegram.org')
    .get(`/bot${config.BOT_API_KEY}/sendMessage?chat_id=f_test_channel&text=text&parse_mode=HTML&disable_web_page_preview=false`)
    .reply(400,
      badResponse
    );
  const bot = new TelegramPostBot(config.BOT_API_KEY);
  try {
    const response = await bot.sendMessage('f_test_channel', 'text', 'HTML', 'false');
  } catch (error) {
    expect(error.message).toEqual(badResponse.description);
  }
});