package com.nbu.projects.dentistappointmentsys.models;


import javax.persistence.*;

@Entity
public class EventComment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "comment_id")
    private Long commentId;

    @Column(nullable = false)
    private Long eventId;

    @Column(nullable = false)
    private String commenterName;

    @Lob
    @Column(length = 100000)
    private String comment;

    public EventComment() { }

    public EventComment(String comment, String commenterName, Long eventId) {
        this.eventId = eventId;
        this.commenterName = commenterName;
        this.comment = comment;
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public String getCommenterName() {
        return commenterName;
    }

    public void setCommenterName(String userId) {
        this.commenterName = userId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}