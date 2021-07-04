import React from 'react';
import QRCode from 'qrcode';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Hello!',
      url: null,
    };
    this.genQRCode = this.genQRCode.bind(this);
  }

  componentDidMount() {
    const { content } = this.state;
    this.genQRCode(content);
  }

  genQRCode(content) {
    QRCode.toDataURL(
      content,
      {
        type: 'image/png',
        margin: 2,
        scale: 8,
      },
      (error, url) => {
        this.setState({
          url,
        });
      }
    );
  }

  render() {
    const { content, url } = this.state;
    return (
      <div className="container max-auto flex md:flex-row flex-col pb-12">
        {url ? (
          <img className="w-72 h-72 object-contain" src={url} alt="QRCode" />
        ) : (
          <div className="w-72 h-72 flex">
            <p>Please input any text</p>
          </div>
        )}
        <textarea
          className="w-72 h-72 textarea border border-gray-200 text-sm p-2"
          onChange={(event) => {
            const { value } = event.target;
            this.setState(
              {
                content: value,
              },
              () => {
                this.genQRCode(value);
              }
            );
          }}
          value={content}
        />
      </div>
    );
  }
}

export default App;
