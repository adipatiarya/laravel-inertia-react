import AuthController from './AuthController'
import HomeController from './HomeController'

const Private = {
    AuthController: Object.assign(AuthController, AuthController),
    HomeController: Object.assign(HomeController, HomeController),
}

export default Private