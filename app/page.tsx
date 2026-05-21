const reviews = [
  {
    name: "安安和奶油",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "我家小狗很怕吹风，美容师会慢慢安抚，洗完毛特别蓬松，回家也没有挠皮肤。",
  },
  {
    name: "阿澈和团子",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "长毛猫开结很细心，没有硬拽，过程还会拍照给我看。价格提前说清楚，很安心。",
  },
  {
    name: "小雪和摩卡",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "造型比我给的参考图更适合它，耳朵和脚脚修得很干净，店里味道也舒服。",
  },
  {
    name: "林女士和豆包",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    text: "第一次来就把注意事项问得很细，豆包平时紧张，但这次洗完还能在休息区睡着。",
  },
  {
    name: "嘉嘉和可乐",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    text: "接送很准时，到店后会发洗护进度。可乐回来香味很自然，不是那种刺鼻香精味。",
  },
  {
    name: "周先生和乌云",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    text: "短毛猫也能洗得很细，耳朵和肉垫都处理到了。客服会提醒下一次护理时间，很省心。",
  },
  {
    name: "Mia 和雪球",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    text: "修剪前会先确认长度和脸型，成品很清爽。雪球回来后拍照特别上镜，家里人都夸。",
  },
  {
    name: "阿南和年糕",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    text: "最喜欢他们把猫狗分区，等待区也干净。年糕胆子小，但每次来都比上一次放松。",
  },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="毛茸茸宠物洗护首页">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M11.4 5.1c-1.9-2.1-5.2-.7-5.1 2.1.1 1.5 1.1 2.8 2.4 3.4-1.8.8-3 2.2-3 4.1 0 2.6 2.2 4.3 6.3 4.3s6.3-1.7 6.3-4.3c0-1.9-1.2-3.3-3-4.1 1.3-.6 2.3-1.9 2.4-3.4.1-2.8-3.2-4.2-5.1-2.1l-.6.7-.6-.7Z" />
              <path d="M9.4 14.4h.1M14.5 14.4h.1M10.5 16.5c.9.6 2.1.6 3 0" />
            </svg>
          </span>
          <span>毛茸茸宠物洗护</span>
        </a>
        <nav aria-label="主导航">
          <a href="#services">洗护服务</a>
          <a href="#pricing">套餐价格</a>
          <a href="#booking">在线预约</a>
          <a href="#reviews">口碑评价</a>
        </nav>
        <a className="nav-action" href="#booking">
          预约
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="宠物洗护首屏">
          <div className="hero-inner">
            <span className="eyebrow">当日可约 · 猫犬分区 · 透明洗护</span>
            <h1>毛茸茸宠物洗护</h1>
            <p>
              温和清洁、皮毛护理、造型修剪和接送服务一次配齐。让爱宠干干净净、松松软软地回家。
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#booking">
                立即预约洗护
              </a>
              <a className="secondary-btn" href="#pricing">
                查看套餐
              </a>
            </div>
            <div className="hero-strip" aria-label="门店数据">
              <div className="hero-stat">
                <strong>45-90 分钟</strong>
                <span>常规洗护完成时间</span>
              </div>
              <div className="hero-stat">
                <strong>1 对 1</strong>
                <span>美容师全程照看</span>
              </div>
              <div className="hero-stat">
                <strong>4.9 / 5</strong>
                <span>会员复购评分</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <h2>从基础清洁到精致造型，都按宠物状态定制</h2>
            <p>
              到店先做皮肤、耳道和毛结检查，再选择合适的清洁力度、吹干方式和护理流程。
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <img
                src="https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?auto=format&fit=crop&w=900&q=85"
                alt="在浴缸里等待洗护的小狗"
              />
              <div className="service-body">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 12h12" />
                    <path d="M8 8h8" />
                    <path d="M8 16h8" />
                    <path d="M4 10c0-4 3-7 8-7s8 3 8 7c0 6-3.6 11-8 11S4 16 4 10Z" />
                  </svg>
                </span>
                <h3>基础沐浴</h3>
                <p>
                  温水冲洗、低敏香波、耳眼清洁、脚底修毛和指甲护理，适合日常清爽维护。
                </p>
              </div>
            </article>
            <article className="service-card">
              <img
                src="https://images.unsplash.com/photo-1518882174711-1de40238921b?auto=format&fit=crop&w=900&q=85"
                alt="宠物美容造型"
              />
              <div className="service-body">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="m14.5 4.5 5 5" />
                    <path d="M3 21l5.5-1.5L20 8l-4-4L4.5 15.5 3 21Z" />
                    <path d="m12 7 5 5" />
                  </svg>
                </span>
                <h3>造型修剪</h3>
                <p>
                  泰迪、比熊、博美、长毛猫等常见造型，可按照照片参考修剪，保留宠物原本表情。
                </p>
              </div>
            </article>
            <article className="service-card">
              <img
                src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=900&q=85"
                alt="放松休息的猫咪"
              />
              <div className="service-body">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2v20" />
                    <path d="M5 7c4 0 7 3 7 7-4 0-7-3-7-7Z" />
                    <path d="M19 7c-4 0-7 3-7 7 4 0 7-3 7-7Z" />
                  </svg>
                </span>
                <h3>皮毛护理</h3>
                <p>
                  开结、去浮毛、护毛精华、肉垫保养和季节性换毛护理，减少打结和掉毛烦恼。
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section alt" id="pricing">
          <div className="section-head">
            <h2>清晰套餐，进店前就知道大概花费</h2>
            <p>
              最终价格会根据体型、毛量、毛结程度和宠物配合度微调，护理前会先确认。
            </p>
          </div>
          <div className="price-grid">
            <article className="price-card">
              <h3>轻松洗</h3>
              <p>适合短毛犬猫和日常清洁。</p>
              <div className="price">
                <strong>¥88</strong>
                <span>起</span>
              </div>
              <ul className="features">
                <li>低敏香波沐浴</li>
                <li>耳眼基础清洁</li>
                <li>吹干与梳理</li>
              </ul>
              <a className="secondary-btn" href="#booking">
                选这个
              </a>
            </article>
            <article className="price-card featured">
              <h3>全套护理</h3>
              <p>最受欢迎，覆盖洗护和细节护理。</p>
              <div className="price">
                <strong>¥168</strong>
                <span>起</span>
              </div>
              <ul className="features">
                <li>基础沐浴全流程</li>
                <li>指甲、脚底、肛门腺护理</li>
                <li>护毛精华和口腔清新</li>
              </ul>
              <a className="primary-btn" href="#booking">
                预约全套
              </a>
            </article>
            <article className="price-card">
              <h3>精修造型</h3>
              <p>适合需要修型、换造型的爱宠。</p>
              <div className="price">
                <strong>¥238</strong>
                <span>起</span>
              </div>
              <ul className="features">
                <li>全套护理流程</li>
                <li>美容师造型设计</li>
                <li>局部开结和护理建议</li>
              </ul>
              <a className="secondary-btn" href="#booking">
                选这个
              </a>
            </article>
          </div>
        </section>

        <section className="section" id="booking">
          <div className="booking-wrap">
            <div className="booking-panel">
              <div className="section-head compact-head">
                <h2>预约到店时间</h2>
                <p>
                  提交后客服会在营业时间内联系确认体型、套餐和到店时间。
                </p>
              </div>
              <form>
                <label>
                  主人姓名
                  <input type="text" name="name" placeholder="例如：小林" required />
                </label>
                <label>
                  手机号码
                  <input type="tel" name="phone" placeholder="用于确认预约" required />
                </label>
                <label>
                  宠物类型
                  <select name="pet" defaultValue="小型犬">
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>短毛猫</option>
                    <option>长毛猫</option>
                  </select>
                </label>
                <label>
                  预约套餐
                  <select name="package" defaultValue="全套护理">
                    <option>全套护理</option>
                    <option>轻松洗</option>
                    <option>精修造型</option>
                    <option>仅咨询</option>
                  </select>
                </label>
                <label>
                  预约日期
                  <input type="date" name="date" />
                </label>
                <label>
                  期望到店时间
                  <input type="time" name="arrivalTime" min="10:00" max="20:00" />
                </label>
                <label>
                  偏好时段
                  <select name="time" defaultValue="上午 10:00-12:00">
                    <option>上午 10:00-12:00</option>
                    <option>下午 13:00-16:00</option>
                    <option>傍晚 16:00-19:00</option>
                  </select>
                </label>
                <label className="full">
                  特殊说明
                  <textarea
                    name="note"
                    placeholder="例如：怕吹风、有毛结、需要接送、皮肤敏感等"
                  />
                </label>
                <div className="full">
                  <button className="primary-btn" type="submit">
                    提交预约
                  </button>
                </div>
              </form>
            </div>
            <aside className="info-panel" aria-label="门店信息">
              <div className="store-info">
                <div>
                  <h2>门店信息</h2>
                  <p>
                    独立猫犬洗护间、可视化美容台、消毒工具一客一换。初次到店建议预留 15
                    分钟熟悉环境。
                  </p>
                </div>
                <ul className="contact-list">
                  <li>
                    <span className="mini-icon">电</span> 400-888-2026
                  </li>
                  <li>
                    <span className="mini-icon">时</span> 周一至周日 10:00-20:00
                  </li>
                  <li>
                    <span className="mini-icon">址</span> 上海市徐汇区宠爱路 66 号
                  </li>
                  <li>
                    <span className="mini-icon">送</span> 3 公里内可预约接送服务
                  </li>
                </ul>
              </div>
              <div className="store-map" aria-label="门店地图">
                <svg viewBox="0 0 900 420" role="img" aria-label="上海市徐汇区宠爱路 66 号附近地图">
                  <rect width="900" height="420" fill="#eef8f3" />
                  <path d="M-20 84 920 15" className="map-road major" />
                  <path d="M-40 330 920 260" className="map-road major" />
                  <path d="M160 -20 260 440" className="map-road" />
                  <path d="M430 -30 390 450" className="map-road" />
                  <path d="M710 -20 620 450" className="map-road" />
                  <path d="M-20 190 930 155" className="map-road" />
                  <path d="M40 390 890 70" className="map-road" />
                  <path d="M585 150c46 10 72 36 78 77 7 46-20 91-71 118" className="map-green" />
                  <circle cx="510" cy="205" r="34" className="map-pin" />
                  <path d="M510 178c19 0 34 15 34 34 0 26-34 64-34 64s-34-38-34-64c0-19 15-34 34-34Z" fill="#f06f61" />
                  <circle cx="510" cy="212" r="11" fill="#ffffff" />
                  <text x="548" y="213" className="map-label">门店位置</text>
                  <text x="536" y="244" className="map-address">徐汇区宠爱路 66 号</text>
                </svg>
              </div>
            </aside>
          </div>
        </section>

        <section className="section alt" id="reviews">
          <div className="section-head">
            <h2>很多回头客，是从一次不紧张的洗澡开始的</h2>
            <p>
              我们会记录每只宠物的性格、敏感点和上次护理情况，下次来店更快进入状态。
            </p>
          </div>
          <div className="review-carousel" aria-label="客户评价轮播">
            <div className="review-track">
              {[...reviews, ...reviews].map((review, index) => (
                <article
                  className="review-card"
                  key={`${review.name}-${index}`}
                  aria-hidden={index >= reviews.length}
                >
                  <div className="stars">★★★★★</div>
                  <p>{review.text}</p>
                  <div className="reviewer">
                    <img src={review.image} alt={`${review.name}的头像`} />
                    <span>{review.name}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <strong>毛茸茸宠物洗护</strong>
        <span>温柔、干净、可预约的社区宠物护理空间</span>
      </footer>
    </>
  );
}
