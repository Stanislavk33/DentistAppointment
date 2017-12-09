package com.nbu.projects.dentistappointmentsys.models;

import javax.persistence.*;

@Entity
public class Ratings {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "rating_id")
        private Long id;

        @Column(nullable = false)
        private Long rater_id;

        @Column(nullable = false)
        private Long rated_id;

        @Column(nullable = false)
        private Double rate;

        @Column(nullable = false)
        private String comment;

        public Ratings() { }

        public Ratings(Long rater_id, Long rated_id, Double rate, String comment) {
                this.rater_id = rater_id;
                this.rated_id = rated_id;
                this.rate = rate;
                this.comment = comment;
        }

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public Long getRater_id() {
                return rater_id;
        }

        public void setRater_id(Long rater_id) {
                this.rater_id = rater_id;
        }

        public Long getRated_id() {
                return rated_id;
        }

        public void setRated_id(Long rated_id) {
                this.rated_id = rated_id;
        }

        public Double getRate() {
                return rate;
        }

        public void setRate(Double rate) {
                this.rate = rate;
        }

        public String getComment() {
                return comment;
        }

        public void setComment(String comment) {
                this.comment = comment;
        }
}
