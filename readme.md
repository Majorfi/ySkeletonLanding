# 💀 ySkeletonLanding
ySkeleton is the fastest way to deploy your landing page.  
What if you don't want to spend time to develop some landing, but still want at least one little sentence to introduce your project ? That's why you have ySkeleton ! A easy to deploy template, ready to be deployed with vercel, for your new project !

The basic assumption is that you will use two website :
- `app.yourproject.domain` for the actual app
- `yourproject.domain` for the landing page, for indexing, communication or else.

You will also need a Github account, and a Vercel account.

Here are two examples : [bowswap](https://bowswap-landing.vercel.app/) & [woofy](https://woofy-landing.vercel.app/) (nothing official, just for demo)

## 1. Use this template
You can click this great green button to use this template for a new repository. That's it. Just click and create a new git repo  
![step1](https://user-images.githubusercontent.com/9974362/128702042-a1da451d-5a55-47fd-9a91-e43bebc42b85.png)

## 2. Create a new project on vercel
The good thing with vercel is that it's easy. Just go to the [newProject page](https://vercel.com/new), select the repository you juste created, select or skip the team and the project name.  
Keep Framework to `NextJS`  
Keep Root to `./`  
Click `Environnment Variables` to configure your project. You will need to setup some env variable :
- `PROJECT_LOGO`: An emoji to be used on the top left of the landing (with the PROJECT_TITLE) and as favicon.
- `PROJECT_TITLE`: The name of the project, used on the top left of the landing (with the PROJECT_LOGO) and for the title of the tab.
- `TITLE`: Main sentence to introduce your project.
- `DESCRIPTION`: Some text, smaller, to give a little bit more details. Also used for the details when sharing the link.
- `BUTTON`: Text inside the button.
- `IMAGE`: URL of the image you want to use for your project. **NOTE: SOME MORE TESTING NEEDED**
- `APP`: URL to your actual app, used to redirect when the user clicks on the button.
- `REPOSITORY`: Link to the github repository.
- `CONTRACT`: Link to the contract (on etherscan).
- `CREDITS`: Hey, the authors deserve some credits ! Note: this could be some Markdown !

Here is an example :
```
PROJECT_LOGO="🏹"
PROJECT_TITLE="Bowswap"
TITLE="Swap Yearn Vault tokens"
DESCRIPTION="Swap Yearn Vault tokens to get the best available yield. Simple."
BUTTON="Start swapping"
IMAGE="/ecosystem/yBowswap.png"
APP="https://bowswap.finance"
REPOSITORY="https://github.com/pandadefi/y-crv-metapool-swapper"
CONTRACT="https://etherscan.io/address/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"
CREDITS="By Ivan, [Panda](https://twitter.com/pandabuild), [Facu](https://twitter.com/fameal) and [Major](https://twitter.com/TBouder) with 💙"
```

## 3. Wait for the deploy
![step3](https://user-images.githubusercontent.com/9974362/128703110-4c7da7bf-eb5c-4874-b579-d77c29910821.png)

## 4. Visit your new landing
![step4](https://user-images.githubusercontent.com/9974362/128703156-18d7ad76-afa0-408e-9ec7-07d98cc95da8.png)

