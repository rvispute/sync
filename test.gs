threaten.as.bs = True, if abs.(indexOf1.(snd.as) - indexOf1.(snd.bs)) > 0
               = True, if abs.(fst.as - fst.bs)  == abs.(indexOf1.(snd.as) - indexOf1.(snd.bs))
               = False, otherwise

suml.[] = 0
suml.xs = head.xs + (suml.(tail.xs))

orl.[] = False
orl.xs = head.xs || (orl.(tail.xs))

insert1.0.l = [1] ++ l
insert1.n.l = [head.l] ++ insert1.(n-1).(tail.l)

indexOf1.xs = 0, if 1 == head.xs
            = 1 + indexOf1.(tail.xs), otherwise

remove.a.[] = [] 
remove.a.ls = tail.ls, if a == head.ls
            = [head.ls] ++ remove.a.(tail.ls), otherwise

eqns = [(xs1,xs2,xs3,xs4,xs5,xs6,xs7,xs8)|l = [0|j<-[0...6]],
                                         k1 = [0...length.l],i1<-k1,xs1=insert1.i1.l,
                                         k2 = remove.i1.k1,  i2<-k2,xs2=insert1.i2.l,
                                         k3 = remove.i2.k2,  i3<-k3,xs3=insert1.i3.l,
                                         k4 = remove.i3.k3,  i4<-k4,xs4=insert1.i4.l,
                                         k5 = remove.i4.k4,  i5<-k5,xs5=insert1.i5.l,
                                         k6 = remove.i5.k5,  i6<-k6,xs6=insert1.i6.l,
                                         k7 = remove.i6.k6,  i7<-k7,xs7=insert1.i7.l,
                                         k8 = remove.i7.k7,  i8<-k8,xs8=insert1.i8.l,
                                         rows = [xs1,xs2,xs3,xs4,xs5,xs6,xs7,xs8],
                                         indRows = [x|x<-zip.[0...length.rows - 1].rows],
                                         bools = [threaten.a.b|a<-indRows,b<-remove.a.indRows],
                                         orl.bools == False
                                        ]
