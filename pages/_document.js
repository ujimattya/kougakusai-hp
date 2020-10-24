import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
        <link rel="icon" href="/samu.svg" />
        <title>2020年こうがく祭公式HP|茨城大学</title>
        <meta content="茨城大学の工学部による学園祭、こうがく祭の2020年度版公式ホームページです。今年は11月7日にオンラインで開催されます。こうがく祭についての情報を発信していきます。" name="description"/>
        <meta charSet="utf-8"/>
        <meta property="og:url" content="https://kougakusai.jp/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" 2020年こうがく祭公式HPのトップページ" />
        <meta property="og:description" content=" 茨城大学の工学部による学園祭、こうがく祭の2020年度版公式ホームページです。今年は11月7日にオンラインで開催されます。" />
        <meta property="og:site_name" content="2020年こうがく祭公式HP|茨城大学" />
        <meta property="og:image" content=" https://kougakusai.jp/og.png/" />
        </Head>
        <body>
          <div>
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
