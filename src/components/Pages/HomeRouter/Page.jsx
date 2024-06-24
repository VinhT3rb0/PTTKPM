import React from 'react'
import styles from './HomeRouter.module.css'

export default function Page() {
  return (
    
    <div className={styles.Test}>
      <div className={styles.title}>
        <h1>giới thiệu</h1>
      </div>
      <div className={styles.about}>
        <h2 className={styles.aboutName}>về chúng tôi</h2>
        <div className={styles.aboutDes}><p>Công ty cổ phần Ant chuyên kinh doanh tour du lịch trọn gói trong và ngoài nước, tour Free & Easy, dịch vụ hàng không, khách sạn, Visa, đào tạo các chuyên ngành du lịch. Trong suốt 30 năm hình thành và phát triển, Công ty cổ phần Ant luôn nằm trong Top 10 hãng lữ hành hàng đầu Việt Nam, luôn chăm chút trong từng quy trình phục vụ để bảo đảm đúng chất lượng dịch vụ và giữ vững cam kết với khách hàng. Bảo đảm cung cấp những sản phẩm đã được chọn lọc. Bảo đảm giá cả hợp lí. Bảo đảm phong cách phục vụ nhiệt tình và chu đáo.</p></div>
      </div>
      <div className={styles.aboutSd}>
        <div className={styles.aboutItem}>
          <img src="https://fiditour.com/wp-content/uploads/2022/11/san-pham-chon-loc.svg" alt="" className={styles.aboutImg}/>
          <p className={styles.aboutText}>Bảo đảm cung cấp những sản phẩm đã được chọn lọc</p>
        </div>
        <div className={styles.aboutItem}>
          <img src="https://fiditour.com/wp-content/uploads/2022/11/chat-luong-tot-nhat.svg" alt="" className={styles.aboutImg}/>
          <p className={styles.aboutText}>Bảo đảm giá cả và chất lượng hợp lý nhất</p>
        </div>
        <div className={styles.aboutItem}>
          <img src="https://fiditour.com/wp-content/uploads/2022/11/phuc-vu-nhiet-tinh.svg" alt="" className={styles.aboutImg}/>
          <p className={styles.aboutText}>Bảo đảm phong cách phục vụ nhiệt tình và chu đáo</p>
        </div>
      </div>
      <div className={styles.aboutMission}>
        <h2 className={styles.missionTitle}>Tầm nhìn & Sứ mệnh</h2>
        <p className={styles.missionDes}>Luôn phấn đấu để giữ vị trí Công ty du lich hàng đầu Việt Nam trong lòng khách du lịch. Cung cấp cho khách hàng những dịch vụ giá trị vượt trội, xây dựng môi trường đầu tư, kinh doanh hiệu quả cho nhân viên và cổ đông, hoạt động bền vững gắn kết với lợi ích của cộng đồng.</p>
      </div>
    </div>
  )
}