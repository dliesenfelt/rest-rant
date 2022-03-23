const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="https://i.pinimg.com/originals/72/83/28/728328ed648f6ea1678a4cf02ef3aba1.jpg" alt="Goofy Husky" />
          </main>
      </Def>
    )
}

module.exports = error404