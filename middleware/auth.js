export default function ({app, route, redirect}) {
  // if (route.path !== '/login') {
  //   //we are on a protected route
  //   console.log('je zit NIET op de login')
  //   if(!app.$fire.auth.currentUser) {
  //     //take them to sign in page
  //     console.log('en je bent NIET ingelogd')
  //     return redirect('/login')
  //   }
  // } else if (route.path === '/login') {
  //   console.log('je zit op de login')
  //   console.log(route.path)
  //   if(!app.$fire.auth.currentUser) {
  //     //leave them on the sign in page
  //   } else {
  //     return redirect('/')
  //   }
  // }
}
