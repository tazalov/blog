export interface User {
  id: string;
  username: string;
  avatar?: string
}

export interface UserSchema {
  authData?: User

  //* флаг нужен, чтобы наши роуты отрабатывали ТОЛЬКО после инициализации авторизованности юзера
  _inited: boolean
}
