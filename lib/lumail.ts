import { Lumail } from "lumail";

let _client: Lumail | null = null;

export function getLumail(): Lumail {
  if (!_client) {
    const apiKey = process.env.LUMAIL_TOKEN;
    if (!apiKey) throw new Error("LUMAIL_TOKEN is not set");
    _client = new Lumail({ apiKey });
  }
  return _client;
}
