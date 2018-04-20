export class Principal {
  public authenticated: boolean;
  public authorities: Authority[] = [];
  public username: String = '';

  constructor(authenticated: boolean, authorities: any[], username: string) {
    this.authenticated = authenticated;
    authorities.map(auth => this.authorities.push(new Authority(auth.authority)));
    if (authenticated) {
      this.username = username;
    } else {
      this.username = '';
    }
  }

  isAdmin() {
    return this.authorities.some((auth: Authority) => auth.authority.indexOf('ADMIN') > -1);
  }
}

export class Authority {
  public authority: String;

  constructor(authority: String) {
    this.authority = authority;
  }
}
