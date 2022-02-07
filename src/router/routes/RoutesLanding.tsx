import { URL } from "libs/constants"
import React from "react"
import { Route } from "react-router-dom"
import Contact from "views/Contact"
import Home from "views/Home"
import Mint from "views/Mint"
import NotFound from "views/NotFound"
import Whitelist from "views/Whitelist"

export default [
  {
    component: (
      <Route exact path={URL.HOME} key={0}>
        <Home />
      </Route>
    )
  },
  {
    component: (
      <Route exact path={URL.CONTACT} key={1}>
        <Contact />
      </Route>
    )
  },
  {
    component: (
      <Route exact path={URL.MINT} key={2}>
        <Mint platinum={false} />
      </Route>
    )
  },
  {
    component: (
      <Route exact path={URL.PLATINUM} key={3}>
        <Mint platinum={true} />
      </Route>
    )
  },
  {
    component: (
      <Route exact path={URL.WHITELIST} key={4}>
        <Whitelist />
      </Route>
    )
  },
  {
    component: (
      <Route key={5}>
        <NotFound />
      </Route>
    )
  }
]
