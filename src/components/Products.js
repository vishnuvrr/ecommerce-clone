import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import ProductCard from "./ProductCard";

export default function Products() {
  let data = [
    {
      ID: 1,
      productName: "ipsum primis",
      price: "$90.13",
    },
    {
      ID: 2,
      productName: "semper tellus",
      price: "$98.63",
    },
    {
      ID: 3,
      productName: "consectetuer ipsum",
      price: "$31.54",
    },
    {
      ID: 4,
      productName: "cubilia Curae;",
      price: "$15.42",
    },
    {
      ID: 5,
      productName: "Fusce diam",
      price: "$44.47",
    },
    {
      ID: 6,
      productName: "pede, malesuada",
      price: "$12.62",
    },
    {
      ID: 7,
      productName: "sem mollis",
      price: "$56.73",
    },
    {
      ID: 8,
      productName: "Nam ac",
      price: "$11.75",
    },
    {
      ID: 9,
      productName: "enim. Suspendisse",
      price: "$95.95",
    },
    {
      ID: 10,
      productName: "lorem eu",
      price: "$95.46",
    },
    {
      ID: 11,
      productName: "ornare, facilisis",
      price: "$36.22",
    },
    {
      ID: 12,
      productName: "Sed neque.",
      price: "$10.40",
    },
    {
      ID: 13,
      productName: "a, facilisis",
      price: "$50.22",
    },
    {
      ID: 14,
      productName: "ac, eleifend",
      price: "$27.44",
    },
    {
      ID: 15,
      productName: "eget tincidunt",
      price: "$74.28",
    },
    {
      ID: 16,
      productName: "enim commodo",
      price: "$10.75",
    },
    {
      ID: 17,
      productName: "sit amet,",
      price: "$44.24",
    },
    {
      ID: 18,
      productName: "massa. Vestibulum",
      price: "$86.91",
    },
    {
      ID: 19,
      productName: "dapibus rutrum,",
      price: "$99.09",
    },
    {
      ID: 20,
      productName: "elit pede,",
      price: "$91.57",
    },
    {
      ID: 21,
      productName: "sed, facilisis",
      price: "$77.08",
    },
    {
      ID: 22,
      productName: "rutrum eu,",
      price: "$48.07",
    },
    {
      ID: 23,
      productName: "aliquet magna",
      price: "$83.15",
    },
    {
      ID: 24,
      productName: "consectetuer adipiscing",
      price: "$89.99",
    },
    {
      ID: 25,
      productName: "varius. Nam",
      price: "$18.99",
    },
    {
      ID: 26,
      productName: "rhoncus. Donec",
      price: "$56.97",
    },
    {
      ID: 27,
      productName: "morbi tristique",
      price: "$69.68",
    },
    {
      ID: 28,
      productName: "Pellentesque ut",
      price: "$93.06",
    },
    {
      ID: 29,
      productName: "In mi",
      price: "$15.01",
    },
    {
      ID: 30,
      productName: "dui. Cras",
      price: "$77.10",
    },
    {
      ID: 31,
      productName: "nibh. Donec",
      price: "$62.49",
    },
    {
      ID: 32,
      productName: "nibh. Phasellus",
      price: "$76.84",
    },
    {
      ID: 33,
      productName: "Proin non",
      price: "$39.33",
    },
    {
      ID: 34,
      productName: "diam. Sed",
      price: "$38.68",
    },
    {
      ID: 35,
      productName: "quis urna.",
      price: "$78.27",
    },
    {
      ID: 36,
      productName: "Cras interdum.",
      price: "$32.17",
    },
    {
      ID: 37,
      productName: "orci quis",
      price: "$96.97",
    },
    {
      ID: 38,
      productName: "parturient montes,",
      price: "$47.37",
    },
    {
      ID: 39,
      productName: "laoreet lectus",
      price: "$70.68",
    },
    {
      ID: 40,
      productName: "luctus et",
      price: "$56.29",
    },
    {
      ID: 41,
      productName: "porttitor interdum.",
      price: "$14.06",
    },
    {
      ID: 42,
      productName: "pellentesque massa",
      price: "$26.08",
    },
    {
      ID: 43,
      productName: "velit. Sed",
      price: "$12.08",
    },
    {
      ID: 44,
      productName: "nostra, per",
      price: "$22.52",
    },
    {
      ID: 45,
      productName: "magna. Suspendisse",
      price: "$32.70",
    },
    {
      ID: 46,
      productName: "Aliquam auctor,",
      price: "$34.81",
    },
    {
      ID: 47,
      productName: "Nulla eu",
      price: "$44.48",
    },
    {
      ID: 48,
      productName: "ullamcorper, nisl",
      price: "$11.69",
    },
    {
      ID: 49,
      productName: "ac facilisis",
      price: "$66.10",
    },
    {
      ID: 50,
      productName: "sapien imperdiet",
      price: "$60.25",
    },
    {
      ID: 51,
      productName: "Donec egestas.",
      price: "$88.92",
    },
    {
      ID: 52,
      productName: "Integer id",
      price: "$58.97",
    },
    {
      ID: 53,
      productName: "ante ipsum",
      price: "$57.86",
    },
    {
      ID: 54,
      productName: "nonummy ut,",
      price: "$29.15",
    },
    {
      ID: 55,
      productName: "Integer in",
      price: "$15.91",
    },
    {
      ID: 56,
      productName: "tristique ac,",
      price: "$36.55",
    },
    {
      ID: 57,
      productName: "metus. Aenean",
      price: "$50.58",
    },
    {
      ID: 58,
      productName: "eleifend vitae,",
      price: "$28.22",
    },
    {
      ID: 59,
      productName: "mattis ornare,",
      price: "$83.24",
    },
    {
      ID: 60,
      productName: "Nullam vitae",
      price: "$1.73",
    },
    {
      ID: 61,
      productName: "gravida. Aliquam",
      price: "$72.10",
    },
    {
      ID: 62,
      productName: "magna a",
      price: "$85.29",
    },
    {
      ID: 63,
      productName: "scelerisque scelerisque",
      price: "$84.50",
    },
    {
      ID: 64,
      productName: "id, ante.",
      price: "$74.11",
    },
    {
      ID: 65,
      productName: "quis, tristique",
      price: "$32.64",
    },
    {
      ID: 66,
      productName: "adipiscing lobortis",
      price: "$85.20",
    },
    {
      ID: 67,
      productName: "rutrum magna.",
      price: "$4.64",
    },
    {
      ID: 68,
      productName: "magna a",
      price: "$20.99",
    },
    {
      ID: 69,
      productName: "lobortis mauris.",
      price: "$87.58",
    },
    {
      ID: 70,
      productName: "velit. Quisque",
      price: "$19.88",
    },
    {
      ID: 71,
      productName: "non quam.",
      price: "$31.90",
    },
    {
      ID: 72,
      productName: "pede. Praesent",
      price: "$43.28",
    },
    {
      ID: 73,
      productName: "ante bibendum",
      price: "$50.21",
    },
    {
      ID: 74,
      productName: "et magnis",
      price: "$49.26",
    },
    {
      ID: 75,
      productName: "quis massa.",
      price: "$42.73",
    },
    {
      ID: 76,
      productName: "Curabitur dictum.",
      price: "$89.02",
    },
    {
      ID: 77,
      productName: "augue ac",
      price: "$57.03",
    },
    {
      ID: 78,
      productName: "enim. Nunc",
      price: "$56.29",
    },
    {
      ID: 79,
      productName: "laoreet, libero",
      price: "$5.64",
    },
    {
      ID: 80,
      productName: "Mauris vestibulum,",
      price: "$46.35",
    },
    {
      ID: 81,
      productName: "porttitor eros",
      price: "$24.37",
    },
    {
      ID: 82,
      productName: "mi enim,",
      price: "$78.13",
    },
    {
      ID: 83,
      productName: "a neque.",
      price: "$31.62",
    },
    {
      ID: 84,
      productName: "enim. Mauris",
      price: "$52.71",
    },
    {
      ID: 85,
      productName: "Nullam velit",
      price: "$7.15",
    },
    {
      ID: 86,
      productName: "eget mollis",
      price: "$65.22",
    },
    {
      ID: 87,
      productName: "auctor ullamcorper,",
      price: "$31.56",
    },
    {
      ID: 88,
      productName: "sociis natoque",
      price: "$35.63",
    },
    {
      ID: 89,
      productName: "felis, adipiscing",
      price: "$1.94",
    },
    {
      ID: 90,
      productName: "habitant morbi",
      price: "$59.47",
    },
    {
      ID: 91,
      productName: "Aenean eget",
      price: "$80.74",
    },
    {
      ID: 92,
      productName: "torquent per",
      price: "$10.40",
    },
    {
      ID: 93,
      productName: "Nam tempor",
      price: "$50.90",
    },
    {
      ID: 94,
      productName: "enim. Etiam",
      price: "$93.08",
    },
    {
      ID: 95,
      productName: "sociis natoque",
      price: "$36.36",
    },
    {
      ID: 96,
      productName: "porttitor vulputate,",
      price: "$2.88",
    },
    {
      ID: 97,
      productName: "a mi",
      price: "$44.50",
    },
    {
      ID: 98,
      productName: "nec urna",
      price: "$16.08",
    },
    {
      ID: 99,
      productName: "lorem eu",
      price: "$2.04",
    },
    {
      ID: 100,
      productName: "ornare, libero",
      price: "$33.10",
    },
  ];

  const [productData, setProductData] = useState([]);
  const [productPages, setProductPages] = useState([]);
  const [productPageData, setProductPageData] = useState([]);
  const [productCartData, setProductCartData] = useState([]);
  const [productTotal,setProductTotal]=useState(0)

  useEffect(() => {
    setProductData(
      data.map((ele) => {
        ele["cart"] = false;
        return ele;
      })
    );
    let productPage = [];
    for (let index = 0; index < data.length / 8 - 1; index++) {
      productPage.push(index);
    }
    setProductPages(productPage);
    let newProductData = [];
    for (let index = 0; index < 8; index++) {
      data[index]["cart"] = false;
      newProductData.push(data[index]);
    }
    setProductPageData(newProductData);
  }, []);

  function changeProductData(pageNumber) {
    let newProductData = [];
    for (let index = 0; index < 8; index++) {
      newProductData.push(productData[(pageNumber - 1) * 8 + index]);
    }
    setProductPageData(newProductData);
  }

  function addProductToCart(productPageId, id) {
    productPageData[productPageId].cart = true;
    productData[id - 1].cart = true;
    productCartData.push(productData[id - 1]);
    setProductTotal(Math.round(productTotal+Number(productData[id-1].price.substring(1))));
    setProductPageData([...productPageData]);
    setProductData([...productData]);
    setProductCartData([...productCartData]);
  }

  function removeProductFromCart(productPageId,id)
  {
    productPageData[productPageId].cart=false;
    productData[id-1].cart=false;
    let cartData=productCartData.filter((data)=>
    {
      if(data.ID===id)
      {
        return false;
      }
      return true;
    })
    setProductTotal(Math.round(productTotal-Number(productData[id-1].price.substring(1))));
    setProductCartData([...cartData]);
    setProductData(productData);
    setProductPageData(productPageData);

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div id="products">
              <div className="containerFluid">
                <div className="row">
                  {productPageData.map((data, index) => (
                    <ProductCard
                      productData={data}
                      productPageId={index}
                      addProductToCart={addProductToCart}
                    ></ProductCard>
                  ))}
                </div>
              </div>
              
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <button class="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {productPages.map((ele, index) => {
            return (
              <li class="page-item">
                <button
                  onClick={() => changeProductData(index + 1)}
                  class="page-link"
                >
                  {index + 1}
                </button>
              </li>
            );
          })}

          <li class="page-item">
            <button class="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <Cart productCartData={productCartData} removeProductFromCart={removeProductFromCart} productTotal={productTotal}></Cart>
          </div>
        </div>
      </div>

    </>
  );
}
