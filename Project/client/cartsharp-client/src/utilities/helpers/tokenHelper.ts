export class TokenHelper {

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    hasToken(): boolean {
        return this.getToken() != null;
    }

    getDecodedToken(): any {
        const result:any = {}

        const token = this.getToken();
        if (!token) {
            return null;
        }

        const payload = window.atob(token.split('.')[1]);
        const parsedToken = JSON.parse(payload);

        Object.keys(parsedToken).forEach(key => {
            const term = key.split('/').pop() as string;
            result[term] = parsedToken[key];
        });
        return result;
    }
}
