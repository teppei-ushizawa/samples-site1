<html lang="ja">
    <head>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    </head>
    <body>
        <div id="root"></div>


        <script>

            const root = React.createRoot(
                document.getElementById('root')
            );
            const element = <h1>Hello,World</h1>
            root.render(element)
        </script>
    </body>
</html>