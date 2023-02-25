import React, { Component } from "react";

import ananas1 from "../assets/ananas1.jpg";
import ananas2 from "../assets/ananas2.jpeg";
import ananas3 from "../assets/ananas3.jpg";
import ananas4 from "../assets/ananas4.jpeg";
import ananas5 from "../assets/ananas5.jpg";
import ananas6 from "../assets/ananas6.jpg";
import ananas7 from "../assets/ananas7.jpg";
import ananas8 from "../assets/ananas8.jpg";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Basas One Simple Life NE - Low Top",
        src: ananas1,
        description: "White",
        status:
          "Giữ vững nét tối giản đặc trưng thuộc dòng Basas, Basas Simple Life - NE (New Episode) sở hữu những đặc điểm nâng cấp ở chất liệu cùng họa tiết foxing mới, sự kết hợp tinh giản không hề đơn điệu, bình thường nhưng không tầm thường cho những ai thực sự yêu thích sự thoải mái đơn giản cho ngày dài hoạt động.",
        content: "New Arrival",
        price: 520.0,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        title: "Basas Bumper Gum NE - Low Top",
        src: ananas2,
        description: "Black/Gum",
        status:
          "Đánh dấu một bước trưởng thành nữa, Basas Bumper Gum NE (New Episode) ra đời với những cải tiến nhẹ nhàng nhưng đủ tạo được sự thay đổi trong cảm nhận khi trải nghiệm. Vẫn giữ ngoại hình gần như không thay để phát huy đặc tính ứng dụng cao của dòng Basas vốn đã được chứng minh, phần đế màu Gum thú vị và /Foxing thân/ mới làm nền cho phần chất liệu Upper được nâng cấp. Đây được xem là một trong những phiên bản được chúng tôi kì vọng có thể bền vững vượt qua thời gian và không gian, chắc chắn đáng để thử.",
        content: "New Arrival",
        price: 580,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Basas Mono Black NE - High Top",
        src: ananas3,
        description: "Black/Gum",
        status:
          "Nâng cấp chất liệu vải mới bền màu ổn định, kết hợp cùng vẻ ngoài ton sur ton từ trên xuống dưới cùng sắc đen cá tính, giúp phiên bản Basas Mono Black NE trở nên quyến rũ và tiện dụng hơn bao giờ hết. Đây hứa hẹn sẽ là sản phẩm lọt vào danh sách cho những tín đồ thường coi màu đen là sự ưu tiên.",
        content: "New Arrival",
        price: 450,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Basas Bumper Gum NE - High Top",
        src: ananas4,
        description: "Offwhite/Guml",
        status:
          "Đánh dấu một bước trưởng thành nữa, Basas Bumper Gum NE (New Episode) ra đời với những cải tiến nhẹ nhàng nhưng đủ tạo được sự thay đổi trong cảm nhận khi trải nghiệm. Vẫn giữ ngoại hình gần như không thay để phát huy đặc tính ứng dụng cao của dòng Basas vốn đã được chứng minh, phần đế màu Gum thú vị và /Foxing thân/ mới làm nền cho phần chất liệu Upper được nâng cấp. Đây được xem là một trong những phiên bản được chúng tôi kì vọng có thể bền vững vượt qua thời gian và không gian, chắc chắn đáng để thử.",
        content: "New Arrival",
        price: 550,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Vintas One Temperate - High Top",
        src: ananas5,
        description: "Dusty Olive",
        status:
          "Má ngoài Suede (da lộn), má trong phủ vải canvas kèm theo các chi tiết phối trộn chất da Nappa nâu trầm điềm đạm là ý đồ sắp xếp làm nên Vintas Temperate Pack. Với tông màu cảm hứng từ cỏ cây cùng khí hậu dịu mát rõ nét của vùng Ôn Đới. Điểm chốt hạ thuyết phục cho những con người sâu sắc, mang tâm hồn yêu thiên nhiên vô bờ bến. ",
        content: "New Arrival",
        price: 770,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Vintas Bleached Sand - Low Top",
        src: ananas6,
        description: "Roasted Sand",
        status:
          "Sử dụng kết hợp chất canvas thông thường cùng chi tiết da lộn trên nền màu trầm đậm, táo bạo mà phá cách. Gợi nhắc cá tính riêng biệt, đặc trưng của những tâm hồn yêu thiên nhiên, thích phiêu lưu đó đây.",
        content: "New Arrival",
        price: 550,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "7",
        title: "Vintas One Saigon 1980s - Low Top",
        src: ananas7,
        description: "Vin Black",
        status:
          "Lấy cảm hứng từ các màu sắc đặc trưng của đường phố Sài Gòn những năm 80, Vintas Saigon 1980s là BST mang đậm nét đẹp cổ kính, hoài niệm. Với những ai yêu mến nét xưa cũ, trầm mặc, Saigon 1980s hứa hẹn sẽ trở thành must-have item cho tủ giày của bạn.",
        content: "New Arrival",
        price: 480,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "8",
        title: "Vintas The New Military - High Top",
        src: ananas8,
        description: "Capulet Olive",
        status:
          "Mang vẻ ngoài bụi bặm, mộc mạc và được lấy cảm hứng từ những bộ quân phục của nhiều binh chủng trong quân đội, Vintas The New Military đem lại một chất lính rất riêng cho những ai yêu phong cách Military và những tâm hồn điềm đạm, kiên cường đầy tinh tế. ",
        content: "Best Seller",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("Sản phẩm đã được thêm vào giỏ hàng.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
