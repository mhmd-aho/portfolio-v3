# Explanation of `projects.tsx`

This document breaks down exactly what is happening inside `c:\Users\PC\Desktop\projects\portfolio-v3\src\sections\projects.tsx`.

## 1. GSAP Plugin Registration
```tsx
gsap.registerPlugin(MotionPathPlugin)
```
Before the component even renders, you are globally registering GSAP's `MotionPathPlugin`. This is required so GSAP knows how to use things like `convertCoordinates`.

## 2. Component Setup & Refs
```tsx
const container = useRef(null)
```
You create a reference to the main `<section>` element. This `container` is then passed into `useGSAP` as the `{scope: container}`. Scoping is a GSAP best practice in React—it tells GSAP to only look for classes (like `.project1`, `.project2`) *inside* this specific section, keeping your animations isolated from the rest of the app.

## 3. The GSAP Animation Loop
Inside the `useGSAP` hook, you are looping through your `projects` array to set up a scroll animation between each project card and the next one:

```tsx
projects.map((_,index) => {
    if(index === 0) return
```
- **Skip the first project:** You start at `index 1` because you need to animate *relative to the previous project*. The first project (`index 0`) doesn't have a previous project to trigger off of.

```tsx
const prevProject = `.project${index-1}`
const currentProject = `.project${index}`
const path = MotionPathPlugin.convertCoordinates(prevProject,currentProject,{x:0,y:100})
```
- **Coordinate Conversion:** You use `MotionPathPlugin.convertCoordinates()` to figure out the spatial relationship between the previous project card and the current one. You're asking GSAP, *"If I position something at `{x:0, y:100}` inside `prevProject`, what are those exact X and Y coordinates relative to `currentProject`?"*

```tsx
gsap.to(currentProject,{
    y: path.y,
    x: path.x,
    scrollTrigger: {
        trigger: prevProject,
        start: "top bottom",
        end: "+=100%",
        scrub: 1,
    }
})
```
- **The Animation Details:**
  - You animate the **current project** moving to those converted coordinates (`path.x`, `path.y`).
  - **ScrollTrigger:** The animation doesn't happen automatically; it's tied to the scroll position using `ScrollTrigger`.
  - **`trigger: prevProject`**: The scroll animation for the *current* card begins based on where the *previous* card is on the screen.
  - **`start: "top bottom"`**: The animation starts when the **top** of the `prevProject` hits the **bottom** of the viewport.
  - **`end: "+=100%"`**: The animation lasts for a scroll distance equal to 100% of the trigger element's height.
  - **`scrub: 1`**: The animation smoothly scrubs back and forth as the user scrolls up and down, but it has a 1-second smoothing delay to make it feel less rigid.

## 4. The UI Rendering
```tsx
<div key={index} className={`project${index} ...`}>
```
Down in your JSX return statement, you iterate over the `projects` to render the actual cards. 
Crucially, you give every single item a dynamic class name like `project0`, `project1`, `project2`, etc. This perfectly matches the selectors you are generating inside your `useGSAP` loop so that GSAP can find the right DOM elements to animate.

Every card contains:
- An image of the project (with interactive hover states for Live and Repo buttons).
- The project metadata (Name, Description, and Tools).
