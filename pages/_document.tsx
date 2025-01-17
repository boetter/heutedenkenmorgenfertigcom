import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="da">
                <Head>
                    <meta
                        content="Heute denken, morgen fertig"
                        name="Rådgivning og træning i Generativ AI af Jacob Bøtter"
                    />
                    <meta
                        content="Heute denken, morgen fertig"
                        property="og:title"
                    />
                    <meta
                        content="Rådgivning og træning i Generativ AI af Jacob Bøtter"
                        property="og:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/fb-og-image.png"
                        property="og:image"
                    />
                    <meta
                        property="og:url"
                        content="https://heutedenkenmorgenfertig.com/"
                    />
                    <meta
                        property="og:site_name"
                        content="Rådgivning og træning i Generativ AI af Jacob Bøtter"
                    />
                    <meta
                        content="Heute denken, morgen fertig"
                        property="twitter:title"
                    />
                    <meta
                        content="Rådgivning og træning i Generativ AI af Jacob Bøtter"
                        property="twitter:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/twitter-card.png"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@boetter" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#0FA053" />
                    <meta name="msapplication-TileColor" content="#0FA053" />
                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
