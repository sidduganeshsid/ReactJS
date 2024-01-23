import React from 'react'

//tailwind css configuration

// below code is direct
// function Card(props)
//below code is called as the destructuring //below parameters for default is the scalable approach
function Card({username="Developer", post="Not assigned Yet", message='"lorem ipsum"', img='"pic"'})
{
  //props is an objects, so how can we add it
  // console.log(props);
    return (
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img} alt="pic" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {message}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      {/* {username || 'Developer '} //default name printing // but not scalable so, use at funtion parameter only */}
      {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  </div>
</figure>
        </>
    )
}

// card()

export default Card




// return (
//   <>
//       <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
// <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://media.licdn.com/dms/image/D5603AQHEzh6FD2Z3Fw/profile-displayphoto-shrink_200_200/0/1702717493736?e=1709769600&v=beta&t=-dtyKAGuf7AiPWJQp0FL7lOEkFXqtuksWFKrUhja9Uo" alt="" width="384" height="512" />
// <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
// <blockquote>
// <p className="text-lg font-medium">
//   “Tailwind CSS is the only framework that I've seen scale
//   on large teams. It’s easy to customize, adapts to any design,
//   and the build size is tiny.”
// </p>
// </blockquote>
// <figcaption className="font-medium">
// <div className="text-sky-500 dark:text-sky-400">
// {/* {username || 'Developer '} //default name printing // but not scalable so, use at funtion parameter only */}
// {username}
// </div>
// <div className="text-slate-700 dark:text-slate-500">
//   {post}
// </div>
// </figcaption>
// </div>
// </figure>