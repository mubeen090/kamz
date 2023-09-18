jsx
import { useState } from "react";
import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import lessons from "../../../../public/assets/courseCard/lessons.png";
import level from "../../../../public/assets/courseCard/level.png";
import rating4 from "../../../../public/assets/courseCard/rating4.png";
import students from "../../../../public/assets/courseCard/students.png";

const CourseCard = ({ slug }) => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/ai.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Artificial Intelligence</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 150+
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            Projects: 4 mini, 4 major
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Basic to advanced level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/ml.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Machine Learning</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 120
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            Projects: 3 mini, 4 major
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Beginner to advanced level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/data-science.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Data Science</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 200+
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            Projects: 5 mini, 5 major
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Intermediate to advanced level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>
      {showAll ? (
        <>
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src="/assets/courseCard/devops.png"
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>Learn DevOps</h1>
            <div className={styles.stats_container}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lesson: 140+
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 3 mini, 3 major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Basic to advanced level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/course/${slug}`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src="/assets/courseCard/oracle.png"
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>Learn Oracle</h1>
            <div className={styles.stats_container}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lesson: 100+
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 2 mini, 2 major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Intermediate level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/course/${slug}`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src="/assets/courseCard/cybersecurity.png"
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>Learn Cyber Security</h1>
            <div className={styles.stats_container}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lesson: 120+
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 5 mini, 3 major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Basic to advanced level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/course/${slug}`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src="/assets/courseCard/aws.png"
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>Learn AWS</h1>
            <div className={styles.stats_container}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lesson: 180+
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 4 mini, 3 major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Intermediate to advanced level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/course/${slug}`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src="/assets/courseCard/java.png"
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>Learn Java</h1>
            <div className={styles.stats_container}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lesson: 200+
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 5 mini, 5 major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Beginner to intermediate level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/course/${slug}`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.explore_button_container}>
          <button className={styles.explore_button} onClick={handleClick}>
            Explore
          </button>
        </div>
      )}
    </>
  );
};

export default CourseCard;