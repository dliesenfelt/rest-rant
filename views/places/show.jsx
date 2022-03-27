const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div>
                <h1>{ data.place.name }</h1>
                <img src={data.place.pic} alt={data.place.name}/>
            </div>
            <div>
                <h2>Ratings</h2>
                <p>Not Rated Yet</p>
                <h2>Description</h2>
                <p>Located in {data.place.city}, {data.place.state}</p>
                <p>{data.place.cuisines}</p>
                <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form id='delete-btn-form' method='POST' action={`/places/${data.id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger'>
                            Delete
                        </button>
                    </form> 
                </div>
            </div>
            <hr />
            <div>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </div>
          </main>
        </Def>
    )
}

module.exports = show