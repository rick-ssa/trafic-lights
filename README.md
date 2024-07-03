# Traffic Light - Challenge

This project has an educational purpose for anyone learning React with Typescript.

Create a traffic light to understand the componetization and reuse of these components.

## Rules

Follow these rules if you want to try creating a different traffic light. :

### Fork the repository

On the repository's main page, click the **fork** button at the top right.

Once the **fork** has been done you now have a remote copy of the repository. :partying_face:

To start working locally on your repository, you have to clone your remote repository. You can find out more at [**Cloning a repository**](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

### Installing and running locally

To install dependencies use `npm install` and to run use `npm start`.

### Building your own traffic light

You must create your own folder within [**src/components/**](src/components), in this folder you can build your component using the folder structure and styles of your choice. **Make sure your styles have unique names**.

Feel free to check other ready-made components and use them through import, but **don't change** them, if you need to make any changes to a component that isn't yours, copy it to a folder within your own and make the change there.

Other users will also be able to use your components in the future.

### Showing the component on the main screen

To show the component on the main screen, you must insert it into the `TrafficLightDataObject` object in [**src/Data/arrayData.txt**](src/Data/arrayData.tsx).

**This is the only existing file in the code that you are allowed to change, please do so with Be careful not to delete other developers' code.**

Insert the following object as the first element of the array, so the last change will always be shown by default when starting the application.

```js
    {
        githubName: "your-github-login",
        trafficLightName: "A label for your traffic light",
        trafficLight: <YourTrafficLightComponent /> //should be imported,
    },

```

### Finishing the job

All ready! Now just make a pull request and we will analyze and go into production.
