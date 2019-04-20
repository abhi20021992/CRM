export interface User {
    UserName: string;
    IsOnline: boolean;
    Password: string;
    RememberMe: boolean;
    Email: string;
}


export interface Token {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    Roles: string;
    FirstName: string;
    LastName: string;
    u_id: string;
    '.issued': string;
    '.expires': string;
  }