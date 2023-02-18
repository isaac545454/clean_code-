import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { url } from "inspector";
import { RemoteAuthentication } from "./remote-authentication";

describe("RemoteAuthentication", () => {
  test("Should call httpPostClient with correct URL", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string) {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
