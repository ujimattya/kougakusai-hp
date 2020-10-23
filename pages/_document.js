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
        <meta charset="utf-8"/>
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
