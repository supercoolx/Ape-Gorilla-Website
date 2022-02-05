import AnimationLoading from "components/animations/AnimationLoading"
import React, { Suspense } from "react"
import { Route, Switch } from "react-router"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const WrapperRouter = ({ children }: { children: any }) => {
  return (
    <>
      <Suspense fallback={<AnimationLoading />}>
        <Route
          render={({ location }) => (
            <TransitionGroup className="fade">
              <CSSTransition
                key={location.key}
                classNames="transition"
                timeout={200}
              >
                <div>
                  <Switch>{children}</Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Suspense>
    </>
  )
}

export default WrapperRouter
