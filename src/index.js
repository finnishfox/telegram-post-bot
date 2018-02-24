import ErrorBadRequest from './ErrorBadRequest';

/**
 * Class represents telegram bot
 * @param {string} token - telegram bot's authentication token
 */
export default class TelegramPostBot {
  /**
   * Create bot
   * @param {string} token - telegram bot's authentication token
   */
  constructor(token) {
    this.token = token;
  }

  /**
   * Send message to telegram channel
   * @param chatId {string} - unique identifier for the target chat or username of the target channel (id or @username)
   * @param text {string} - text of message
   * @param parseMode {string} - mode: Markdown or HTML to show bold/italic text and inline URLS in message
   * @param webpagePreviewOff {boolean} - true to disable link previews
   */
  async sendMessage(chatId, text, parseMode, webpagePreviewOff) {
    let result;
      result = await fetch(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=${parseMode}&disable_web_page_preview=${webpagePreviewOff}`);
      const json = await result.json();
      if (result.ok) return json.result;
      throw new ErrorBadRequest(json.description);
  }
}
