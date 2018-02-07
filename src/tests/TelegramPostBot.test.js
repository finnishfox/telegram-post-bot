import nock from 'nock';
import "isomorphic-fetch";
import 'dot-env';
import TelegramPostBot from '../index';


test('ok', async () => {
  const okResponse = {
    "ok": true,
    "result": {
      "message_id": 93,
      "chat": {"id": process.env.CHAT_ID, "title": "f_test_channel", "username": "f_test_channel", "type": "channel"},
      "date": 1517507839,
      "text": "text"
    }
  };
  nock('https://api.telegram.org')
    .get(`/bot${process.env.BOT_API_KEY}/sendMessage?chat_id=@f_test_channel&text=text&parse_mode=HTML&disable_web_page_preview=false`)
    .reply(200,
      okResponse
    );
  const bot = new TelegramPostBot(process.env.BOT_API_KEY);
  const response = await bot.sendMessage('@f_test_channel', 'text', 'HTML', 'false');
  expect(response).toEqual(okResponse.result);
});


test('bad request if channel name doesnt start with @', async () => {
  const statusCode=400;
  const badResponse = {"ok": false, "error_code": statusCode, "description": "Bad Request: chat not found"};
  nock('https://api.telegram.org')
    .get(`/bot${process.env.BOT_API_KEY}/sendMessage?chat_id=f_test_channel&text=text&parse_mode=HTML&disable_web_page_preview=false`)
    .reply(400,
      badResponse
    );
  const bot = new TelegramPostBot(process.env.BOT_API_KEY);
  try {
    const response = await bot.sendMessage('f_test_channel', 'text', 'HTML', 'false');
  } catch (error) {
    expect(error.message).toEqual(badResponse.description);
    expect(error.statusCode).toEqual(badResponse['error_code']);
  }
});