import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import img1 from "@site/static/img/Step1.png"
import img2 from "@site/static/img/Step2.png"
import img3 from "@site/static/img/Step3.png"
type FeatureItem = {
  title: string;
  img: string
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DIY Business Solutions ',
    img: img1,
    description: (
      <>
        We are a team of "Power Chefs" who have developed a lot of applications which we would love to share with you. But we rater like to teach you how to "Do it yourself"
      </>
    ),
  },
  {
    title: 'Governance that works',
    img: img2,
    description: (
      <>
        The more complicated you make it, the harder it will be to control. We suggest that you use an approach of making a 
        lot of small parts, with a central list acting as a name services and the place to go for discovering new opportunities.
      </>
    ),
  },
  {
    title: 'Great User Experience',
    img: img3,
    description: (
      <>
      Our focus is on learning you to make a great  User Experience. 
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img}></img>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
