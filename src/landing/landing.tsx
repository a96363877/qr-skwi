import './landing.css';
import { useCart } from '../cartContext';
import toast from 'react-hot-toast';

function Landing(props: { handleNextPage: any }) {
  const { total, cartItems, addToCart } = useCart() as any;

  const handleAddtoCart = (items: any) => {
    addToCart(items);
    toast.success('Product added');
  };
  return (
    <>
      <div className="__className" style={{ zoom: 0.9 }} dir="ltr">
        <div className="MainContainer_childWrapper">
          <div className="MainContainer_headerContainer5N">
            <header className="Header_header__HSEQ9 Header_show">
              <div className="Header_nav">
                <div className="Header_logoWithCatalog">
                  <a
                    rel="noopener noreferrer"
                    data-analytic-label="logo"
                    data-analytic-element-location="header"
                    data-test-id="snoonulogo"
                    className="Logo_logo__oq6_b"
                    href="#"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Snoonu"
                        src="/22.PNG"
                        decoding="async"
                        data-nimg="fill"
                        className="Logo_fullLogo__l2rPp"
                        style={{
                          position: 'absolute',
                          top: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: '180px',
                          height: 'auto',
                          minWidth: '99px',
                          objectFit: 'contain',
                        }}
                      />
                    </span>
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Snoonu"
                        src="/22.PNG"
                        decoding="async"
                        data-nimg="fill"
                        className="Logo_miniLogo__W0OJP"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 200,
                          height: 'auto',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </span>
                  </a>
                  <div className="CatalogMenu_wrapper">
                    <button
                      className="Button_button Button_secondary Button_small CatalogButton_button__wTnA9"
                      data-analytic-label="catalogMenuButton"
                      data-analytic-element-location="header"
                    >
                      <a href="#cart">
                        <span className="Button_content">
                          <span
                            data-test-id=""
                            className="Icon_icon Button_icon__Shlur"
                          >
                            <span
                              style={{
                                boxSizing: 'border-box',
                                display: 'block',
                                overflow: 'hidden',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                              }}
                            >
                              <img
                                alt="icon"
                                src="/menu.4fcd2317.svg"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  bottom: 0,
                                  right: 0,
                                  boxSizing: 'border-box',
                                  padding: 0,
                                  border: 'none',
                                  margin: 'auto',
                                  display: 'block',
                                  width: 0,
                                  height: 0,
                                  minWidth: '100%',
                                  maxWidth: '100%',
                                  minHeight: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain',
                                }}
                              />
                            </span>
                          </span>
                          <span className="CatalogButton_text">Menu</span>
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
                <div className="Search_wrappe">
                  <div>
                    <span data-test-id="" className="Icon_icon">
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          overflow: 'hidden',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <img
                          alt="icon"
                          src="/arrow_left.92b153fa.svg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <form action="#" className="Search_searchWrappe">
                    <div className="SearchSelector_wrapper__P_w2s">
                      <div className="SearchSelector_selector">
                        <p className="Typography_p8 SearchSelector_label">
                          All Categories
                        </p>
                        <span
                          data-test-id=""
                          className="Icon_icon"
                          style={{ width: 16, height: 16 }}
                        >
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                            }}
                          >
                            <img
                              alt="icon"
                              src="/chevron_down_gray.c98c600.svg"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="Autocomplete_wrapper">
                      <span
                        data-test-id=""
                        className="Icon_icon Autocomplete_searchIcon   Autocomplete_smallIcon   Search_searchIcon__4o9Ok"
                      >
                        <span
                          style={{
                            boxSizing: 'border-box',
                            display: 'block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="icon"
                            src="/search.8dc73f65.svg"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'none',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                            }}
                          />
                        </span>
                      </span>
                      <div className="Autocomplete_rightSection">
                        <button
                          data-test-id="searchFieldBtn"
                          className="SearchButton_button  "
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon"
                            style={{ width: 20, height: 20 }}
                          >
                            <span
                              style={{
                                boxSizing: 'border-box',
                                display: 'block',
                                overflow: 'hidden',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                              }}
                            >
                              <img
                                alt="icon"
                                src="/search_white.svg"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  bottom: 0,
                                  right: 0,
                                  boxSizing: 'border-box',
                                  padding: 0,
                                  border: 'none',
                                  margin: 'auto',
                                  display: 'block',
                                  width: 0,
                                  height: 0,
                                  minWidth: '100%',
                                  maxWidth: '100%',
                                  minHeight: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain',
                                }}
                              />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="Header_sideWrapper">
                  <div
                    className="CartButton_wrapper"
                    style={{ display: 'block' }}
                  >
                    <button
                      className="Button_button Button_primary Button_small"
                      data-test-id="cartBtn"
                      data-analytic-label="cartButton"
                      data-analytic-element-location="header"
                    >
                      <span
                        className="Button_content"
                        style={{ background: '#025380' }}
                      >
                        <div
                          className="CartButton_cartButton  "
                          style={{
                            color: 'white',
                            padding: '2px 2px ',
                            fontSize: 10,
                            borderRadius: 20,
                          }}
                        >
                          <img
                            alt="icon"
                            decoding="async"
                            data-nimg="fill"
                            src="/cart.svg"
                            className="asyncicon"
                          />
                          <span>{total.toFixed(2) + ''}</span> QAR
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </div>{' '}
          <div className="ContentWrapper_container">
            <h1 className="Typography_h1__cT2UT">National Fish</h1>
            <p className="Typography_p7  Description_text__qN1Uu">
              Discover our high-quality products of fresh and imported fish and premium shrimp. Order now with the best and fastest online delivery service.
            </p>
            <div className="Carousel_wrapper">
              <div className="Carousel_navButtonWrapper__gL_66">
                <div
                  data-analytic-label="carouselButtonPrev"
                  data-analytic-event-content="subCategories"
                  className="NavButton_wrapper__iJpe4 NavButton_prev__lHoNZ"
                >
                  <span
                    data-test-id=""
                    className="Icon_icon"
                    style={{ width: 24, height: 24 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/carousel_arrow_left.9172eaa1.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className="Carousel_carousel__SoVOb SubCategories_row">
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={181}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/top4.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'medium',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '50px',
                              objectFit: 'cover',
                              borderRadius: '100%',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">
                      Offers
                    </p>
                  </div>
                </div>
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={3644}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/top1.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'medium',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">
                      Turkish Sea Bass
                    </p>
                  </div>
                </div>
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={2198}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/top2.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'medium',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">
                      Jumbo Shrimp
                    </p>
                  </div>
                </div>
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={3405}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/top3.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'medium',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">
                      Nigerian Salmon
                    </p>
                  </div>
                </div>
              </div>
              <div className="Carousel_navButtonWrapper__gL_66" />
            </div>
            <div className="FilterPresets_wrapper__sSfR_">
              <div className="FilterPresets_filterWrapper">
                <div
                  data-analytic-label="fastFilter"
                  data-analytic-event-content={1}
                  data-analytic-event-action="filter_apply"
                  className="FilterPresets_filter__czMu5 cart FilterPresets_first__ID2kE"
                >
                  <span
                    data-test-id=""
                    className="Icon_icon FilterPresets_icon"
                    style={{ width: 24, height: 24 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/free_delivery.33e8a802.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                  <p className="Typography_p6__xuxGw">Free Delivery</p>
                </div>
              </div>
              <div className="FilterPresets_filterWrapper ">
                <div
                  data-analytic-label="fastFilter"
                  data-analytic-event-content={2}
                  data-analytic-event-action="filter_apply"
                  className="FilterPresets_filter__czMu5 cart"
                >
                  <p className="Typography_p6__xuxGw">Within 40 Minutes</p>
                </div>
              </div>
              <div className="FilterPresets_filterWrapper">
                <div
                  data-analytic-label="fastFilter"
                  data-analytic-event-content={4}
                  data-analytic-event-action="filter_apply"
                  className="FilterPresets_filter__czMu5 cart FilterPresets_last__3dQB8"
                >
                  <p className="Typography_p6__xuxGw">Special Delivery</p>
                </div>
              </div>
            </div>
          </div>
          <div id="productList" className="ContentWrapper_container">
            <div
              className="MerchantCard_wrapper__ATC0P"
              style={{ margin: '-11px', borderRadius: '24px 24px 0 0' }}
            >
              <div className="MerchantCard_imageWrapper">
                <div className="MerchantPromoTag_promotion__vyiug MerchantCard_promotion__ahhw_">
                  <div className="MerchantPromoTag_promoTag__FEfqB MerchantPromoTag_percentageOff__nlGd7">
                    <p className="Typography_p10__GTCdN">30% Discount</p>
                  </div>
                  <div className="MerchantPromoTag_promoTag__FEfqB MerchantPromoTag_supportLocal__q0RXl">
                    <p className="Typography_p10__GTCdN">Support Local</p>
                  </div>
                </div>
                <span className="minus">
                  <img
                    alt="National Fish Menu"
                    src="/mb.jpg"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'medium',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <noscript />
                </span>
                <div className="MerchantCard_deliveryTime__hFF6r">
                  <span
                    data-test-id=""
                    className="Icon_icon MerchantCard_driverIcon__VOTuk"
                    style={{ width: 16, height: 16 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/driver-white.39436dda.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                  <p className="Typography_p8">40 Minutes</p>
                </div>
              </div>
              <div className="MerchantCard_content__aOUZU">
                <div className="MerchantCard_primaryDetails__zEdMX">
                  <p
                    className="Typography_p1__A2FUF MerchantCard_name__e7RSA"
                    style={{ fontSize: 25, height: 35, padding: '5px 0' }}
                  >
                    National Fish Menu
                  </p>
                </div>
                <div className="MerchantCard_secondaryDetails__c9r_K">
                  <div className="MerchantCard_rating__yd2Tt">
                    <span
                      data-test-id=""
                      className="Icon_icon"
                      style={{ width: 12, height: 12 }}
                    >
                      <span className="minus">
                        <img
                          alt="icon"
                          src="/star_yellow.3109f807.svg"
                          decoding="async"
                          data-nimg="fill"
                          className="asyncicon"
                        />
                        <noscript />
                      </span>
                    </span>
                    <p className="Typography_p8">4.7</p>
                  </div>
                  <p className="Typography_p8 MerchantCard_tags___u15_">
                    Fresh and Imported Fish and Premium Shrimp
                  </p>
                </div>
              </div>
            </div>
            <div className="_slug__merchantDetailsWrapper__Ni_d0">
              <div className="MerchantDetails_wrapper__NGWQ1">
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">
                    Delivery Time
                  </p>
                  <span>
                    <p className="Typography_p1__A2FUF">
                      40{/* */} {/* */}Minutes
                    </p>
                  </span>
                </div>
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">
                    Rating
                  </p>
                  <span>
                    <p className="Typography_p1__A2FUF">4.7</p>
                  </span>
                </div>
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">
                    Distance
                  </p>
                  <span>
                    <div className="MerchantPriceRange_averagePrice__tgZLX">
                      <p className="Typography_p1__A2FUF MerchantPriceRange_price__XHs4b MerchantPriceRange_priceActive__8rgoP">
                        15 km
                      </p>
                    </div>
                  </span>
                </div>
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">
                    Working Hours
                  </p>
                  <span>
                    <p className="Typography_p1__A2FUF">
                      <span className="MerchantDetails_status__UAoUR MerchantDetails_open__C8KJd">
                        Open
                      </span>
                    </p>
                  </span>
                </div>
              </div>
              <div className="SearchInMerchant_wrapper__WNY3F">
                <form
                  action="#"
                  className="SearchInMerchant_searchWrapper__BhKze"
                >
                  <div className="Autocomplete_wrapper">
                    <span
                      data-test-id=""
                      className="Icon_icon Autocomplete_searchIcon   Autocomplete_smallIcon  "
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          overflow: 'hidden',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <img
                          alt="icon"
                          src="/search.8dc73f65.svg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </span>
                    </span>

                    <div className="Autocomplete_rightSection" />
                  </div>
                </form>
              </div>
              <div className="_slug__description___UXGB">
                Order now through our website and get fast delivery within 28 minutes.
              </div>
            </div>
            <div className="BestSelling_wrapper__QVPK0 quantities_1" id="cart">
              <h2 className="Typography_h2__Gzo5Y BestSelling_title__NuZ2_">
                Today's Offers
              </h2>
              <div
                className="BestSelling_group__aDxsJ"
                style={{ position: 'relative', overflow: 'scroll' }}
              >
                <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="kuwaiti-jumbo-robian-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="10 kg Peeled Jumbo Shrimp Box + 2 kg Salmon"
                          src="/+2 kg Salmon.png"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        97.00 QAR
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        10 kg Peeled Jumbo Shrimp Box + 2 kg Salmon
                      </p>
                    </div>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: 'Box [Shrimp] 10 kg - only for 8 QAR!',
                            price: '97.00',
                            img: '/pr-0.png',
                          });
                        }}
                        data-product-id="product_1"
                        data-product-image="/pr-0.png"
                        data-product-name="Shrimp Box 10 kg - only for 8 QAR!"
                        data-price={8.0}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_1"
                        className="Typography_h5__MRrA0 quantity_1"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>   <div className="pro_2">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="shrimp-delight-offer"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="Shrimp Offer - Irresistible Taste!"
                          src="https://cdn.altibbi.com/cdn/cache/1000x500/image/2020/11/10/56380b8d67c2bcec2e15c13eb881e900.png"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        98.00 QAR
                      </h5>
                      <p className="Typography_p7 ProductCartVerticalDescription_name__M0ou9">
                        5 kg Premium Salmon Box
                      </p>
                    </div>
                    <div className="a_pluss_2">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart"
                        onClick={() => {
                          handleAddtoCart({
                            id: 1,
                            name: 'Shrimp Offer - Irresistible Taste!',
                            price: '98.00',
                            img: '/shrimp_offer.jpg',
                          });
                        }}
                        data-product-id="product_2"
                        data-product-image="/shrimp_offer.jpg"
                        data-product-name="Shrimp Offer - Irresistible Taste!"
                        data-price={72.83}
                        data-class-add="btn_add_2"
                        data-class-remove="btn_remove_2"
                        data-class-pluss="btn_pluss_2"
                        data-class-aremove="a_pluss_2"
                        data-quantity-id="quantity_2"
                        data-qquantity-id="qquantity_2"
                      >
                        <span className="Button_content btn_add_2">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 d-none" />
                      </a>
                    </div>
                    <div className="defualt_2 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_2  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_2"
                        data-quantity-id="quantity_2"
                        data-defualt="defualt_2"
                        data-loadd="loadd_2"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_2"
                        className="Typography_h5__MRrA0 quantity_2"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_2"
                        data-quantity-id="quantity_2"
                        data-defualt="defualt_2"
                        data-loadd="loadd_2"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_2">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_2">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="shrimp-delight-offer"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="Shrimp Offer - Irresistible Taste!"
                          src="/robi.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        95.99QAR
                      </h5>
                      <p className="Typography_p7 ProductCartVerticalDescription_name__M0ou9">
                        Shrimp Offer - Irresistible Taste!
                      </p>
                    </div>
                    <div className="a_pluss_2">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart"
                        onClick={() => {
                          handleAddtoCart({
                            id: 1,
                            name: 'Shrimp Offer - Irresistible Taste!',
                            price: '72.83',
                            img: '/shrimp_offer.jpg',
                          });
                        }}
                        data-product-id="product_2"
                        data-product-image="/shrimp_offer.jpg"
                        data-product-name="Shrimp Offer - Irresistible Taste!"
                        data-price={72.83}
                        data-class-add="btn_add_2"
                        data-class-remove="btn_remove_2"
                        data-class-pluss="btn_pluss_2"
                        data-class-aremove="a_pluss_2"
                        data-quantity-id="quantity_2"
                        data-qquantity-id="qquantity_2"
                      >
                        <span className="Button_content btn_add_2">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 d-none" />
                      </a>
                    </div>
                    <div className="defualt_2 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_2  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_2"
                        data-quantity-id="quantity_2"
                        data-defualt="defualt_2"
                        data-loadd="loadd_2"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_2"
                        className="Typography_h5__MRrA0 quantity_2"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_2"
                        data-quantity-id="quantity_2"
                        data-defualt="defualt_2"
                        data-loadd="loadd_2"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_2">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_4">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="daily-perfect-taste"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="Shari Offer - Perfect Daily Taste!"
                          src="/sari.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        97.00 QAR
                      </h5>
                      <p className="Typography_p7 ProductCartVerticalDescription_name__M0ou9">
                        Shari Offer - Perfect Daily Taste!
                      </p>
                    </div>
                    <div className="a_pluss_4">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart"
                        onClick={() => {
                          handleAddtoCart({
                            id: 3,
                            name: 'Shari Offer - Perfect Daily Taste!',
                            price: '97.00',
                            img: '/sari.jpg',
                          });
                        }}
                        data-product-id="product_4"
                        data-product-image="/sari.jpg"
                        data-product-name="Shari Offer - Perfect Daily Taste!"
                        data-price={219.58}
                        data-class-add="btn_add_4"
                        data-class-remove="btn_remove_4"
                        data-class-pluss="btn_pluss_4"
                        data-class-aremove="a_pluss_4"
                        data-quantity-id="quantity_4"
                        data-qquantity-id="qquantity_4"
                      >
                        <span className="Button_content btn_add_4">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_4 d-none" />
                      </a>
                    </div>
                    <div className="defualt_4 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_4  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_4"
                        data-quantity-id="quantity_4"
                        data-defualt="defualt_4"
                        data-loadd="loadd_4"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_4"
                        className="Typography_h5__MRrA0 quantity_4"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_4"
                        data-quantity-id="quantity_4"
                        data-defualt="defualt_4"
                        data-loadd="loadd_4"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_4">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_4 " />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pro_3">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="seabream-delight-offer"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="Seabream Offer - Best Sea Flavors!"
                          src="/sbt.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        97.00 QAR
                      </h5>
                      <p className="Typography_p7 ProductCartVerticalDescription_name__M0ou9">
                        Seabream Offer - Best Sea Flavors!
                      </p>
                    </div>
                    <div className="a_pluss_3">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart"
                        onClick={() => {
                          handleAddtoCart({
                            id: 2,
                            name: 'Seabream Offer - Best Sea Flavors!',
                            price: '97.00',
                            img: '/sbt.jpg',
                          });
                        }}
                        data-product-id="product_3"
                        data-product-image="/seabream_offer.jpg"
                        data-product-name="Seabream Offer - Best Sea Flavors!"
                        data-price={97.76}
                        data-class-add="btn_add_3"
                        data-class-remove="btn_remove_3"
                        data-class-pluss="btn_pluss_3"
                        data-class-aremove="a_pluss_3"
                        data-quantity-id="quantity_3"
                        data-qquantity-id="qquantity_3"
                      >
                        <span className="Button_content btn_add_3">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 d-none" />
                      </a>
                    </div>
                    <div className="defualt_3 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_3  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_3"
                        data-quantity-id="quantity_3"
                        data-defualt="defualt_3"
                        data-loadd="loadd_3"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_3"
                        className="Typography_h5__MRrA0 quantity_3"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_3"
                        data-quantity-id="quantity_3"
                        data-defualt="defualt_3"
                        data-loadd="loadd_3"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_3">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 " />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="kuwaiti-jumbo-robian-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="Fresh Grouper - Your Table Deserves the Best!"
                          src="/hmo.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        111.00 QAR
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        Fresh Grouper - Your Table Deserves the Best!
                      </p>
                    </div>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: 'Fresh Grouper - Your Table Deserves the Best!',
                            price: '111.00',
                            img: '/hma.jpg',
                          });
                        }}
                        data-product-id="product_1"
                        data-product-image="/ab.jpg"
                        data-product-name="Fresh Grouper - Your Table Deserves the Best!"
                        data-price={4.99}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_1"
                        className="Typography_h5__MRrA0 quantity_1"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="kuwaiti-jumbo-robian-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="Norwegian Salmon - Fresh and Special!"
                          src="/sm.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        111.00 QAR
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        Norwegian Salmon - "Fresh and Special"!
                      </p>
                    </div>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: 'Shrimp Box 10 kg - only for 8 QAR!',
                            price: '111.00 ',
                            img: '/ab.jpg',
                          });
                        }}
                        data-product-id="product_1"
                        data-product-image="/ab.jpg"
                        data-product-name="Shrimp Box 10 kg - only for 8 QAR!"
                        data-price={60.79}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_1"
                        className="Typography_h5__MRrA0 quantity_1"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="kuwaiti-jumbo-robian-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="Pomfret Offer - King of the Emirati Table!"
                          src="/zbb.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        100 QAR
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        Pomfret Offer - "King of the Emirati Table!"
                      </p>
                    </div>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: 'Pomfret Offer - "King of the Emirati Table!"',
                            price: '100',
                            img: '/kuwaiti-jumbo-robian-10kg.jpg',
                          });
                        }}
                        data-product-id="product_1"
                        data-product-image="/kuwaiti-jumbo-robian-10kg.jpg"
                        data-product-name='Pomfret Offer - "King of the Emirati Table!"'
                        data-price={100}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_1"
                        className="Typography_h5__MRrA0 quantity_1"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="kuwaiti-jumbo-robian-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="10 kg Fresh Emirati Jumbo Shrimp"
                          src="https://sam-five-snowy.vercel.app/images/2.png"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        97.270 QAR
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        10 kg Fresh Emirati Jumbo Shrimp
                      </p>
                    </div>
                    <div className="a_pluss_1">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: '10 kg Fresh Emirati Jumbo Shrimp',
                            price: '  97.270',
                            img: '/kuwaiti-jumbo-robian-10kg.jpg',
                          });
                        }}
                        data-product-id="product_1"
                        data-product-image="/kuwaiti-jumbo-robian-10kg.jpg"
                        data-product-name="10 kg Fresh Emirati Jumbo Shrimp"
                        data-price={8.0}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_1"
                        className="Typography_h5__MRrA0 quantity_1"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_2">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz"
                    data-id="turkish-sea-bass-800-1000"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="Chicken and Turkey Club Sandwich with Sourdough Bread"
                          src="https://ar.alwatainy.com/iranian-medium-robian-1kg.jpg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        100.18 QAR
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        10 kg Turkish Sea Bass Box Size 800-1000
                      </p>
                    </div>
                    <div className="a_pluss_2">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        data-product-id="product_2"
                        data-product-image="          https://ar.alwatainy.com/turkish-sea-bass.jpg"
                        data-product-name="10 kg Turkish Sea Bass Box Size 800-1000"
                        data-product-price={20.0}
                        data-class-add="btn_add_2"
                        data-class-remove="btn_remove_2"
                        data-class-pluss="btn_pluss_2"
                        data-class-aremove="a_pluss_2"
                        data-quantity-id="quantity_2"
                        data-qquantity-id="qquantity_2"
                        onClick={() => {
                          handleAddtoCart({
                            id: 0,
                            name: '10 kg Turkish Sea Bass Box Size 800-1000',
                            price: '100.18',
                            img: ' https://ar.alwatainy.com/turkish-sea-bass.jpg',
                          });
                        }}
                      >
                        <span className="Button_content btn_add_2">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 d-none" />
                      </a>
                    </div>
                    <div className="defualt_2 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_2  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_2"
                        data-quantity-id="quantity_2"
                        data-defualt="defualt_2"
                        data-loadd="loadd_2"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_2"
                        className="Typography_h5__MRrA0 quantity_2"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_2"
                        data-quantity-id="quantity_2"
                        data-defualt="defualt_2"
                        data-loadd="loadd_2"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_2">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_3">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz"
                    data-id="jumbo-robian-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="Sourdough and Multigrain"
                          src="https://i.ibb.co/1cm0ZZs/ron.webp"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        98.00 QAR
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        10 kg Peeled Jumbo Shrimp Box
                      </p>
                    </div>
                    <div className="a_pluss_3">
                      <button
                        onClick={() =>
                          handleAddtoCart({
                            id: 0,
                            name: '10 kg Fresh Emirati Jumbo Shrimp',
                            price: '98.00',
                            img: '/kuwaiti-jumbo-robian-10kg.jpg',
                          })
                        }
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        data-product-id="product_3"
                        data-product-image="https://sam-five-snowy.vercel.app/images/1.png"
                        data-product-name="10 kg Peeled Jumbo Shrimp Box"
                        data-product-price={8.0}
                        data-class-add="btn_add_3"
                        data-class-remove="btn_remove_3"
                        data-class-pluss="btn_pluss_3"
                        data-class-aremove="a_pluss_3"
                        data-quantity-id="quantity_3"
                        data-qquantity-id="qquantity_3"
                      >
                        <span className="Button_content btn_add_3">Add</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 d-none" />
                      </button>
                    </div>
                    <div className="defualt_3 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_3  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_3"
                        data-quantity-id="quantity_3"
                        data-defualt="defualt_3"
                        data-loadd="loadd_3"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_3"
                        className="Typography_h5__MRrA0 quantity_3"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_3"
                        data-quantity-id="quantity_3"
                        data-defualt="defualt_3"
                        data-loadd="loadd_3"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_3">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Products_wrapper__DZlbk quantities_2">
              <h2
                className="Typography_h2__Gzo5Y Products_title__qA1wA"
                style={{ margin: 0 }}
              >
                &nbsp;
              </h2>
              <div className="Products_group__gsBas">

                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={203168}
                  className="ProductCardHorizontal_wrapper__byIUf pro_2"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="National Offer"
                        src="/pr-0.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        National Offer
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        10 kg Turkish Sea Bass Box Size 800-1000.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="turkish-sea-bass-800-1000"
                    >
                      <h5 className="Typography_h5__MRrA0">98.00 QAR</h5>
                      <div className="a_pluss_2">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_2"
                          data-product-image="           https://sam-five-snowy.vercel.app/images/1.png"
                          data-product-name="10 kg Turkish Sea Bass Box Size 800-1000"
                          data-product-price={20.0}
                          data-class-add="btn_add_2"
                          data-class-remove="btn_remove_2"
                          data-class-pluss="btn_pluss_2"
                          data-class-aremove="a_pluss_2"
                          data-quantity-id="quantity_2"
                          data-qquantity-id="qquantity_2"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: '10 kg Fresh Emirati Jumbo Shrimp',
                              price: '97.37',
                              img: '/kuwaiti-jumbo-robian-10kg.jpg',
                            });
                          }}
                        >
                          <span className="Button_content btn_add_2">
                            Add
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 d-none" />
                        </a>
                      </div>
                      <div className="defualt_2 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_2  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_2"
                          data-quantity-id="quantity_2"
                          data-defualt="defualt_2"
                          data-loadd="loadd_2"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_2"
                          className="Typography_h5__MRrA0 quantity_2"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_2"
                          data-quantity-id="quantity_2"
                          data-defualt="defualt_2"
                          data-loadd="loadd_2"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_2">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={137123}
                  className="ProductCardHorizontal_wrapper__byIUf pro_3"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Today's Special"
                        src="\+2 kg Salmon.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        Today's Special
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        10 kg Peeled Jumbo Shrimp Box + 2 kg Salmon
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="jumbo-robian-10kg"
                    >
                      <h5 className="Typography_h5__MRrA0">97.00 QAR</h5>
                      <div className="a_pluss_3">
                        <a
                          type="button"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: '10 kg Peeled Jumbo Shrimp Box',
                              price: '97.00',
                              img: '/kuwaiti-jumbo-robian-10kg.jpg',
                            });
                          }}
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_3"
                          data-product-image="           https://sam-five-snowy.vercel.app/images/3.png"
                          data-product-name="10 kg Peeled Jumbo Shrimp Box"
                          data-product-price={97.37}
                          data-class-add="btn_add_3"
                          data-class-remove="btn_remove_3"
                          data-class-pluss="btn_pluss_3"
                          data-class-aremove="a_pluss_3"
                          data-quantity-id="quantity_3"
                          data-qquantity-id="qquantity_3"
                        >
                          <span className="Button_content btn_add_3">
                            Add
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 d-none" />
                        </a>
                      </div>
                      <div className="defualt_3 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_3  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_3"
                          data-quantity-id="quantity_3"
                          data-defualt="defualt_3"
                          data-loadd="loadd_3"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_3"
                          className="Typography_h5__MRrA0 quantity_3"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_3"
                          data-quantity-id="quantity_3"
                          data-defualt="defualt_3"
                          data-loadd="loadd_3"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_3">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={137123}
                  className="ProductCardHorizontal_wrapper__byIUf pro_3"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Today's Special"
                        src="https://i.ibb.co/1cm0ZZs/ron.webp"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        Today's Special
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        5 kg Peeled Jumbo Shrimp Box.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="jumbo-robian-10kg"
                    >
                      <h5 className="Typography_h5__MRrA0">45.0 QAR</h5>
                      <div className="a_pluss_3">
                        <a
                          type="button"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: '10 kg Peeled Jumbo Shrimp Box',
                              price: '45.0',
                              img: '/kuwaiti-jumbo-robian-10kg.jpg',
                            });
                          }}
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_3"
                          data-product-image="           https://sam-five-snowy.vercel.app/images/3.png"
                          data-product-name="10 kg Peeled Jumbo Shrimp Box"
                          data-product-price={97.0}
                          data-class-add="btn_add_3"
                          data-class-remove="btn_remove_3"
                          data-class-pluss="btn_pluss_3"
                          data-class-aremove="a_pluss_3"
                          data-quantity-id="quantity_3"
                          data-qquantity-id="qquantity_3"
                        >
                          <span className="Button_content btn_add_3">
                            Add
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 d-none" />
                        </a>
                      </div>
                      <div className="defualt_3 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_3  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_3"
                          data-quantity-id="quantity_3"
                          data-defualt="defualt_3"
                          data-loadd="loadd_3"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_3"
                          className="Typography_h5__MRrA0 quantity_3"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_3"
                          data-quantity-id="quantity_3"
                          data-defualt="defualt_3"
                          data-loadd="loadd_3"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_3">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={203167}
                  className="ProductCardHorizontal_wrapper__byIUf pro_4"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Turkish Sea Bass Box"
                        src="/turkish-sea-bass.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        Turkish Sea Bass Box
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        10 kg Turkish Sea Bass Box Size 1000-1500.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="turkish-sea-bass"
                    >
                      <h5 className="Typography_h5__MRrA0">97.00 QAR</h5>
                      <div className="a_pluss_4">
                        <a
                          type="button"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: '10 kg Turkish Sea Bass Box Size 1000-1500.',
                              price: '97.09',
                              img: '/kuwaiti-jumbo-robian-10kg.jpg',
                            });
                          }}
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_4"
                          data-product-image="           https://sam-five-snowy.vercel.app/images/3.png"
                          data-product-name="10 kg Turkish Sea Bass Box Size 1000-1500."
                          data-product-price={389.09}
                          data-class-add="btn_add_4"
                          data-class-remove="btn_remove_4"
                          data-class-pluss="btn_pluss_4"
                          data-class-aremove="a_pluss_4"
                          data-quantity-id="quantity_4"
                        >
                          <span className="Button_content btn_add_4">
                            Add
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_4 d-none" />
                        </a>
                      </div>
                      <div className="defualt_4 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_4  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_4"
                          data-quantity-id="quantity_4"
                          data-defualt="defualt_4"
                          data-loadd="loadd_4"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_4"
                          className="Typography_h5__MRrA0 quantity_4"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_4"
                          data-quantity-id="quantity_4"
                          data-defualt="defualt_4"
                          data-loadd="loadd_4"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_4">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_4 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={6900404}
                  className="ProductCardHorizontal_wrapper__byIUf pro_5"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Medium Iranian Shrimp"
                        src="/iranian-medium-robian-1kg.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        Medium Iranian Shrimp
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        1 kg Medium Iranian Shrimp.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="iranian-medium-robian-1kg"
                    >
                      <h5 className="Typography_h5__MRrA0">97.00  QAR</h5>
                      <div className="a_pluss_5">
                        <a
                          type="button"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: '1 kg Medium Iranian Shrimp.',
                              price: '97.5',
                              img: '/kuwaiti-jumbo-robian-10kg.jpg',
                            });
                          }}
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_5"
                          data-product-image="/iranian-medium-robian-1kg.jpg"
                          data-product-name="1 kg Medium Iranian Shrimp."
                          data-product-price="4219.586"
                          data-class-add="btn_add_5"
                          data-class-remove="btn_remove_5"
                          data-class-pluss="btn_pluss_5"
                          data-class-aremove="a_pluss_5"
                          data-quantity-id="quantity_5"
                        >
                          <span className="Button_content btn_add_5">
                            Add
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_5 d-none" />
                        </a>
                      </div>
                      <div className="defualt_5 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_5  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_5"
                          data-quantity-id="quantity_5"
                          data-defualt="defualt_5"
                          data-loadd="loadd_5"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_5"
                          className="Typography_h5__MRrA0 quantity_5"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_5"
                          data-quantity-id="quantity_5"
                          data-defualt="defualt_5"
                          data-loadd="loadd_5"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_5">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_5 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ProductCardHorizontal_wrapper__byIUf pro_7">
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Nigerian Salmon"
                        src="/nigerian-salmon.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        Nigerian Salmon
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        1 kg Nigerian Salmon.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="nigerian-salmon"
                    >
                      <h5 className="Typography_h5__MRrA0">69.00  QAR</h5>
                      <div className="a_pluss_7">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_7"
                          data-product-image="/nigerian-salmon.jpg"
                          data-product-name="1 kg Nigerian Salmon."
                          data-product-price="69.00 "
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: '1 kg Nigerian Salmon',
                              price: '69.91',
                              img: '/kuwaiti-jumbo-robian-10kg.jpg',
                            });
                          }}
                          data-class-add="btn_add_7"
                          data-class-remove="btn_remove_7"
                          data-class-pluss="btn_pluss_7"
                          data-class-aremove="a_pluss_7"
                          data-quantity-id="quantity_7"
                        >
                          <span className="Button_content btn_add_7">
                            Add
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_7 d-none" />
                        </a>
                      </div>
                      <div className="defualt_7 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_7  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_7"
                          data-quantity-id="quantity_7"
                          data-defualt="defualt_7"
                          data-loadd="loadd_7"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_7"
                          className="Typography_h5__MRrA0 quantity_7"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_7"
                          data-quantity-id="quantity_7"
                          data-defualt="defualt_7"
                          data-loadd="loadd_7"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_7">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_7 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ProductCardHorizontal_wrapper__byIUf">
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Large Shrimp"
                        src="/large-robian-1kg.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        Large Shrimp
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        1 kg Large Shrimp.
                      </p>
                    </div>
                    <div
                      id="pro_6"
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="large-robian-1kg"
                    >
                      <h5 className="Typography_h5__MRrA0">97.00 QAR</h5>
                      <div className="a_pluss_6">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_6"
                          data-product-image="/large-robian-1kg.jpg"
                          data-product-name="1 kg Large Shrimp."
                          data-product-price="54.72"
                          data-class-add="btn_add_6"
                          data-class-remove="btn_remove_6"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: '1 kg Nigerian Salmon',
                              price: '97.72',
                              img: '/kuwaiti-jumbo-robian-10kg.jpg',
                            });
                          }}
                          data-class-pluss="btn_pluss_6"
                          data-class-aremove="a_pluss_6"
                          data-quantity-id="quantity_6"
                        >
                          <span className="Button_content btn_add_6">
                            Add
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_6 d-none" />
                        </a>
                      </div>
                      <div className="defualt_6 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_6  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_6"
                          data-quantity-id="quantity_6"
                          data-defualt="defualt_6"
                          data-loadd="loadd_6"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_6"
                          className="Typography_h5__MRrA0 quantity_6"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_6"
                          data-quantity-id="quantity_6"
                          data-defualt="defualt_6"
                          data-loadd="loadd_6"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_6">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_6 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>      <div className="ProductCardHorizontal_wrapper__byIUf">
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Grouper Fillet"
                        src="/pr-2.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        Grouper Fillet
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        1 kg Grouper Fillet.
                      </p>
                    </div>
                    <div
                      id="pro_6"
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="large-robian-1kg"
                    >
                      <h5 className="Typography_h5__MRrA0">100.00 QAR</h5>
                      <div className="a_pluss_6">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_6"
                          data-product-image="/large-robian-1kg.jpg"
                          data-product-name="1 kg Large Shrimp."
                          data-product-price="54.72"
                          data-class-add="btn_add_6"
                          data-class-remove="btn_remove_6"
                          onClick={() => {
                            handleAddtoCart({
                              id: 0,
                              name: '1 kg Grouper Fillet',
                              price: '100.72',
                              img: '/pr-2.png',
                            });
                          }}
                          data-class-pluss="btn_pluss_6"
                          data-class-aremove="a_pluss_6"
                          data-quantity-id="quantity_6"
                        >
                          <span className="Button_content btn_add_6">
                            Add
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_6 d-none" />
                        </a>
                      </div>
                      <div className="defualt_6 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_6  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_6"
                          data-quantity-id="quantity_6"
                          data-defualt="defualt_6"
                          data-loadd="loadd_6"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_6"
                          className="Typography_h5__MRrA0 quantity_6"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_6"
                          data-quantity-id="quantity_6"
                          data-defualt="defualt_6"
                          data-loadd="loadd_6"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_6">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_6 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="MerchantCard_wrapper__ATC0P"
          style={{ display: 'none', marginTop: 35 }}
        >
          <div className="MerchantCard_imageWrapper" style={{ height: 424 }}>
            <span className="minus">
              <img
                decoding="async"
                data-nimg="fill"
                className="asyncicon"
                src="/459307463_1044724404108266_4808211461608369674_n.jpg"
                alt="Notice"
              />
            </span>
            <div className="MerchantCard_deliveryTime__hFF6r">
              <span
                data-test-id=""
                className="Icon_icon MerchantCard_driverIcon__VOTuk"
                style={{ width: 16, height: 16 }}
              >
                <span className="minus">
                  <img
                    alt="icon"
                    src="/driver-white.39436dda.svg"
                    decoding="async"
                    data-nimg="fill"
                    className="asyncicon"
                  />
                </span>
              </span>
              <p className="Typography_p8">Official Website</p>
            </div>
          </div>
        </div>
        <div className="allcarts" >
          <div id="open_cart" className="CartButtonMob_wrapper">
            <div className="CartButtonMob_goToCart__50kKk">
              <div id="total" className="CartButtonMob_sum__7e1nq">
                <span
                  className="CartButtonMob_count__NyKX4"
                  style={{ background: 'white' }}
                >
                  <p className="Typography_p5  ">
                    {cartItems.length === 0 ? 0 : (cartItems.length as number)}
                  </p>
                </span>
                <h5 className="Typography_h5__MRrA0">
                  <span>{total.toFixed(2)} QAR</span>
                </h5>
              </div>
              <div
                onClick={
                  () => {
                    if (total.toFixed(2) < 0.1) {
                      alert('Cart is empty')
                    } else {
                      props.handleNextPage()

                    }
                  }
                }
                className="CartButtonMob_goToCheckout__WILRU"
                style={{ cursor: 'pointer' }}
              >
                <a style={{ display: 'flex', gap: 5, zIndex: 9999999999 }}>
                  <h5 className="Typography_h5__MRrA0">Go to Cart</h5>
                  <span
                    data-test-id=""
                    className="Icon_icon CartButtonMob_icon__fwWfH"
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/go_to_checkout.b2db30ab.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="cartWrapper"
          style={{
            background: '#f6f6f6',
            padding: '20px 0',
            marginBottom: 20,
            display: 'none',
          }}
        ></div>
        <footer>
          <div
            className="ContentWrapper_container Footer_footer__fG8HL"
            style={{ marginTop: 0, padding: 20, marginBottom: 7 }}
          >
            <div className="Footer_info__7Pspt">
              <div className="Footer_legalLinks__fOusS">
                <a href="#">Terms and Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
              <p className="Footer_copyright__zeUcK">
                © 2024 National Fish Company
              </p>
            </div>
            <div className="Footer_socialLinks__Znatd">
              <div className="Footer_link__J_xuo">
                <span
                  data-test-id=""
                  className="Icon_icon"
                  style={{ width: 18, height: 18 }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  >
                    <img
                      alt="icon"
                      src="/social_instagram.cf3c4b8c.svg"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: 0,
                        height: 0,
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Landing;
