const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    roles: state => state.user.roles,
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    permission_routes: state => state.permission.routes,
    view_tags: state => state.viewtags.tagsList
}

export default getters;