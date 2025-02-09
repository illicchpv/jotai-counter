  ### // в случае использования useState, refresh и всё нормально. console:
  ```
   call App # 1 (useState)  
   onRender 1001  
   useEffect   
```   


  ### // в случае использования useState, refresh и двойное обновление. console:
```  
   call App # 1 (useAtom)
   onRender 1001
   useEffect 
   call App # 2 (useAtom)
   onRender 1002
```

---

https://jotai.org/docs/extensions/immer#atomwithimmer

https://jotai.org/docs/utilities/split#splitatom

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
