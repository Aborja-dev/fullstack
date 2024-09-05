/* eslint-disable @typescript-eslint/no-explicit-any */
export class FetchRequest {
    config!: any
    baseUrl: string
    constructor(url: string, config?: any) {
        this.config = config
        this.baseUrl = url
    }

    get() {
        const configBody = {
            method: 'GET',
        }
        this.config = configBody
        return this
    }

    post<B>(body: B) {
        const configBody = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: this.parseBody(body),
        }
        this.config = configBody
        return this
    }
     patch<U>(data: Partial<U>) {
        const configBody = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: this.parseBody(data),
        }
        this.config = configBody
        return this
     }
      delete() {
        const configBody = {
            method: 'DELETE',
        }
        this.config = configBody
        return this
      }
      async fetch <T>(resourcePath: string, code: {success: number, error: number} = {success: 200, error: 500}): Promise<T | Error> {
        if (this.config === undefined) {
            throw new Error('No config provided')
        }
        const response = await fetch(`${this.baseUrl}${resourcePath}`, this.config)
        if (response.status !== code.success) {
            return new Error(response.statusText)
        }
        const data = await response.json()
        return data
      }
    private parseBody(body: unknown) {
        return JSON.stringify(body)
    }
}
