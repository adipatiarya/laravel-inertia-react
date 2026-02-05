import HomeController from './HomeController'
import UserController from './UserController'
import RoleController from './RoleController'

const Private = {
    HomeController: Object.assign(HomeController, HomeController),
    UserController: Object.assign(UserController, UserController),
    RoleController: Object.assign(RoleController, RoleController),
}

export default Private